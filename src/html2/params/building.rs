use crate::html2::*;
use crate::db;
use crate::units::*;

fn common(container: &HtmlElement, thermal_conductivity: &DtuPerMetreSecondPerDegree, mass: &Kg, size: &Size, flood_threshold: &Option<Percent>, hp: &Option<i32>, invincible: &Option<bool>) {
  display_thermal_conductivity(container, thermal_conductivity);
  display_mass(container, mass);
  display_size(container, size);
  display_flood_threshold(container, flood_threshold);
  display_hp(container, hp, invincible);
}

impl db::BuildingBase {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &Some(self.hp), &None);
  }
}

impl db::BuildingOxygen {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold,&Some(self.hp), &None);
  }
}

impl db::BuildingPower {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold,&Some(self.hp), &None);
  }
}

impl db::BuildingFood {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold,&Some(self.hp), &None);
  }
}

impl db::BuildingPlumbing {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &Some(self.hp), &None);
  }
}

impl db::BuildingHvac {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &Some(self.hp), &None);
  }
}

impl db::BuildingRefining {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold,&Some(self.hp), &None);
  }
}

impl db::BuildingMedical {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold,&Some(self.hp), &None);
  }
}

impl db::BuildingFurniture {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &self.hp, &self.invincible);
  }
}

impl db::BuildingEquipment {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &None, &Some(self.hp), &None);
  }
}

impl db::BuildingUtilities {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &Some(self.hp), &None);
  }
}

impl db::BuildingAutomation {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &Some(self.hp), &None);
  }
}

impl db::BuildingConveyance {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &None, &Some(self.hp), &None);
  }
}

impl db::BuildingRocketry {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &self.hp, &self.invincible);
  }
}

impl db::BuildingRocketModule {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &None, &None, &None);
  }
}

impl db::BuildingHep {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &self.hp, &self.invincible);
  }
}

impl db::BuildingGravitas {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    if let Some(entity) = &self.primary_element {
      display_primary_element(container, entity);
    }
   // common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &self.hp);
  }
}

impl db::BuildingQuest {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
    if let Some(entity) = &self.primary_element {
      display_primary_element(container, entity);
    }
   // common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &self.hp);
  }
}

impl db::BuildingLander {
  pub fn create_html(&self, container: &HtmlElement, _: &Entity) {
      display_primary_element(container, self.primary_element);
    //common(container, &self.thermal_conductivity, &self.mass, &self.size, &self.flood_threshold, &self.hp);
  }
}
