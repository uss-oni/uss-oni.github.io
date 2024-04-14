use crate::db::recipe::*;
use crate::html::*;
use crate::icon;

pub fn display_phases(container: &HtmlElement, entity: &Entity) {
  let align = Align::new();
  for recipe in recipes.iter().filter_map(|r| match r {
    Recipe::Phase(ret @ Phase { input: other, .. }) if std::ptr::eq(entity, *other) => Some(ret),
    _ => None,
  }) {
    let icon = match recipe.type_of {
      PhaseType::Cooking => &icon::TEMP_UP,
      PhaseType::Melting => &icon::TEMP_UP,
      PhaseType::Solidification => &icon::TEMP_UP,
      PhaseType::Vaporization => &icon::TEMP_UP,
      PhaseType::Freezing => &icon::TEMP_DOWN,
      PhaseType::Sublimation => &icon::TEMP_UP,
      PhaseType::Transmutation => &icon::TEMP_UP,
      PhaseType::Condensation => &icon::TEMP_DOWN,
    };
    Line::new(container).icon(icon).label(recipe.type_of.to_text()).values("propValuePhase", |line| {
      line
        .value_align("valuePhaseTemp", &recipe.temp, &align)
        .value("valuePhaseArrow", "⟶")
        .foreach(recipe.output, |line, output| {
          line
            .img("valuePhaseIcon", &output.entity.img())
            .value("valuePhaseElement", output.entity.name())
            .value_filter("valuePhasePercent", &output.percent, output.percent.0 < 1.0)
        })
    });
  }
}

pub fn get_other_phases(entity: &Entity) -> Vec<&Phase>{
  recipes.iter().filter_map(|r| match r {
    Recipe::Phase(ret @ Phase { output: other, .. }) if other.iter().any(|o| std::ptr::eq(entity, o.entity)) => Some(ret),
    _ => None,
  }).collect::<Vec<_>>()
}

pub fn display_other_phases(container: &HtmlElement, other_phases: Vec<&Phase>) {
  let align = Align::new();
  for recipe in other_phases {
    let icon = match recipe.type_of {
      PhaseType::Cooking => &icon::TEMP_UP,
      PhaseType::Melting => &icon::TEMP_UP,
      PhaseType::Solidification => &icon::TEMP_UP,
      PhaseType::Vaporization => &icon::TEMP_UP,
      PhaseType::Freezing => &icon::TEMP_DOWN,
      PhaseType::Sublimation => &icon::TEMP_UP,
      PhaseType::Condensation => &icon::TEMP_DOWN,
      PhaseType::Transmutation => &icon::TEMP_UP,
    };
    Line::new(container).icon(&recipe.input.img()).label(recipe.input.name()).values("propValuePhase", |line| {
      line
        .img("valuePhaseTempIcon", icon)
        .value_align("valuePhaseTemp", &recipe.temp, &align)
        .value("valuePhaseArrow", "⟶")
        .foreach(recipe.output, |line, output| {
          line
            .img("valuePhaseIcon", &output.entity.img())
            .value("valuePhaseElement", output.entity.name())
            .value_filter("valuePhasePercent", &output.percent, output.percent.0 < 1.0)
        })
    });
  }
}
