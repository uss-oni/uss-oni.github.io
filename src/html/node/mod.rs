pub mod div;
pub mod select;
pub mod option;
pub mod image;
pub mod p;

pub use div::*;
pub use select::Select;
pub use option::Option;
pub use image::Image;
pub use p::P;

use web_sys::Document;
use wasm_bindgen::JsCast;

fn create_node<U: wasm_bindgen::JsCast>(document: &Document, s: &str) -> U {
  document.create_element(s).unwrap().dyn_into::<U>().unwrap()
}