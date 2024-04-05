use wasm_bindgen::prelude::*;
use web_sys::HtmlElement;

// Called when the wasm module is instantiated
#[wasm_bindgen(start)]
fn main() -> Result<(), JsValue> {
    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");

    // Manufacture the element we're gonna append
    let val = document.create_element("p")?;
    val.set_inner_html("Hello from Rust!");

    body.append_child(&val)?;
    toto(&body);
    Ok(())
}

#[wasm_bindgen]
pub fn add(a: u32, b: u32) -> u32 {
    a + b
}



mod element {

  struct element {
    tag: &'static str,
    molar_mass: f32,
    hardness: f32,
    shc: f32,
    strenght: f32,
  }

  mod solid {
}
}


const BUILDINGS_ORDER: [&'static Building; 1] = [
  &BUILDINGS[0]
];

fn display_list(div: HtmlElement) {
  for Building in BUILDINGS.into_iter(). sort_by(|a, b| a.menu_order.partial_cmp(&b.menu_order).unwrap()) {
      Building.
  }
}

#[derive(Clone)]
struct Building {
  tag: &'static str,
  tags: &'static [&'static str],
  thermal_conductivity: f32,
}

const BUILDINGS: [Building; 1] = [
  Building {
    tag: "AdvancedDoctorStation",
    tags: &[],
    thermal_conductivity: 3.0
  }
];

fn toto(body: &HtmlElement) {
  body.set_text_content(Some(BUILDINGS[0].tag));
}
/* 
medical: {
  AdvancedDoctorStation: {
    tag: "AdvancedDoctorStation",
    menuOrder: 6.0,
    tags: [
      "Clinic"
    ],
    thermalConductivity: 1.0,
    locationRule: "OnFloor",
    materialCategory: [
      "RefinedMetal"
    ],
    electrityConsummation: [
      480.0
    ],
    externalHeat: 0.25,
    internalHeat: 0.5,
    width: 2,
    height: 3,
    hp: 100,
    highTempWarning: 348.15,
    highTempFatal: 533.15,
    mass: 200.0,
    floodThreshold: 0.35,
    deconstructable: true,
    enableable: true
  },

  */