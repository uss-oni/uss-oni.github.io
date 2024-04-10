use crate::html::*;
use crate::db;

impl db::ElementSolid {
  pub fn create_html(self: &Self, container: &HtmlElement, entity: &Entity) {
    display_phases(container, entity);
    display_shc(container, &self.shc);
    display_thermal_conductivity(container, &self.thermal_conductivity);
    display_molar_mass(container, &self.molar_mass);
    display_radiation_absorbption(container, &self.radiation_absorption_factor);
    display_hardness(container, self.hardness);
    display_gravity(container, self.min_horizontal_flow);
  }
}

impl db::ElementLiquid {
  pub fn create_html(self: &Self, container: &HtmlElement, entity: &Entity) {
    display_phases(container, entity);
    display_shc(container, &self.shc);
    display_thermal_conductivity(container, &self.thermal_conductivity);
    display_molar_mass(container, &self.molar_mass);
    display_radiation_absorbption(container, &self.radiation_absorption_factor);
    display_light_absorbption(container, &self.light_absorption);
  }
}

impl db::ElementGas {
  pub fn create_html(self: &Self, container: &HtmlElement, entity: &Entity) {
    display_phases(container, entity);
    display_shc(container, &self.shc);
    display_thermal_conductivity(container, &self.thermal_conductivity);
    display_molar_mass(container, &self.molar_mass);
    display_radiation_absorbption(container, &self.radiation_absorption_factor);
    display_light_absorbption(container, &self.light_absorption);
  }
}

impl db::ElementOther {
  pub fn create_html(self: &Self, _container: &HtmlElement, _: &Entity) {
  }
}
