pub static TODO: Icon = Icon { name: "noIdea"};
pub static ATOM: Icon = Icon { name: "atom" };
pub static DECOR: Icon = Icon { name: "decor" };
pub static SIZE: Icon = Icon { name: "size" };
pub static HEATFLOW: Icon = Icon { name: "heatflow" };
pub static HP: Icon = Icon { name: "hp" };
pub static RADIATION: Icon = Icon { name: "radiation" };
pub static TEMP_UP: Icon = Icon { name: "tempUp" };
pub static TEMP_DOWN: Icon = Icon { name: "tempDown" };
pub static HARDNESS_0: Icon = Icon { name: "digIcon" };
pub static HARDNESS_50: Icon = Icon { name: "digIcon_1" };
pub static HARDNESS_150: Icon = Icon { name: "digIcon_2" };
pub static HARDNESS_200: Icon = Icon { name: "digIcon_3" };
pub static GRAVITY: Icon = Icon { name: "gravity" };
pub static LIGHT: Icon = Icon { name: "light" };
pub static MORALE: Icon = Icon { name: "morale" };
pub static FOOD: Icon = Icon { name: "food" };

pub struct Icon {
  name: &'static str,
}

pub trait Image {
  fn path(self: &Self) -> String;
}

impl Image for Icon {
  fn path(self: &Self) -> String {
    let mut ret = String::from("images/Icon/");
    ret += self.name;
    ret += ".png";
    ret
  }
}

