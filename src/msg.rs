use slotmap::{self, DefaultKey};
use std::any::{Any, TypeId};
use std::cell::{Cell, RefCell};
use std::collections::HashMap;
use std::marker::PhantomData;
use std::rc::Rc;

#[derive(Default)]
struct TypeMap {
  types: HashMap<TypeId, Box<dyn Any>>,
}

impl TypeMap {
  fn get_or_insert<T: 'static>(&mut self) -> &mut T
  where
    T: Default,
  {
    self
      .types
      .entry(TypeId::of::<T>())
      .or_insert_with(|| Box::<T>::default())
      .downcast_mut()
      .unwrap()
  }

  fn get<T: 'static>(&self) -> Option<&T>
  where
    T: Default,
  {
    self
      .types
      .get(&TypeId::of::<T>())
      .map(|it| it.downcast_ref().unwrap())
  }
}

thread_local! {
  static ROUTER: RefCell<Router> = Router::new().into();
  static FLAG: Cell<bool> = false.into();
}

pub struct Router {
  map: TypeMap,
}

pub struct Key<Msg: 'static> {
  key: DefaultKey,
  phantom: PhantomData<Msg>,
}

impl<Msg: 'static> Drop for Key<Msg> {
  fn drop(&mut self) {
    ROUTER.with_borrow_mut(|router| router.remove::<Msg>(self))
  }
}

type MapListener<T> = slotmap::SlotMap<DefaultKey, Rc<dyn Listener<T>>>;

impl Router {
  pub fn register<Msg>(&mut self, receiver: Box<dyn Listener<Msg>>) -> Key<Msg> {
    let v = self.map.get_or_insert::<MapListener<Msg>>();
    let key = v.insert(receiver.into());
    Key {
      key,
      phantom: Default::default(),
    }
  }

  pub fn remove<Msg: 'static>(&mut self, key: &Key<Msg>) {
    let v = self.map.get_or_insert::<MapListener<Msg>>();
    v.remove(key.key);
  }

  pub fn new() -> Self {
    Self {
      map: Default::default(),
    }
  }

  pub fn get_send<Msg: 'static>(&self) -> Vec<Rc<dyn Listener<Msg>>> {
    if let Some(slot) = self.map.get::<MapListener<Msg>>() {
      slot.values().map(|it| it.clone()).collect()
    } else {
      vec![]
    }
  }
}

pub trait Listener<Msg> {
  fn recv(&self, msg: &Msg);
}

pub struct Receiver<Msg, State, F>
where
  F: Fn(&Msg, State),
{
  state: State,
  callback: F,
  phantom: PhantomData<Msg>,
}

impl<Msg, State, F> Listener<Msg> for Receiver<Msg, State, F>
where
  F: Fn(&Msg, State),
  State: Clone,
{
  fn recv(&self, msg: &Msg) {
    (self.callback)(msg, self.state.clone())
  }
}

impl<Msg: 'static, State, F> Receiver<Msg, State, F>
where
  F: Fn(&Msg, State) + 'static,
  State: Clone + 'static,
{
  pub fn new(state: State, f: F) -> Key<Msg> {
    ROUTER.with_borrow_mut(|router| {
      router.register(Box::new(Self {
        state,
        callback: f,
        phantom: Default::default(),
      }))
    })
  }
}

pub fn send<T: 'static>(t: T) {
  for it in ROUTER.with_borrow(|router| router.get_send::<T>()) {
    it.recv(&t);
  }
}
