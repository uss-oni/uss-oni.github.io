trait CSS {
  
}

struct Rule<T> {
  name: &'static str,
  value: T
}

impl CSS for Rule<i32> {
    
}

struct Block {
  margin:f32,
}

const margin: Rule<i32> = Rule { name: "margin", value: 0};
