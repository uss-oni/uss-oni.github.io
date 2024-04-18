use crate::db::recipe::*;
use crate::html2::*;

pub fn get_construction_materials(entity: &Entity) -> Vec<&Building> {
  recipes
    .iter()
    .filter_map(|r| match r {
      Recipe::Building(ret @ Building { output: other, .. }) if std::ptr::eq(entity, *other) => Some(ret),
      _ => None,
    })
    .collect::<Vec<_>>()
}

pub fn display_construction_materials(container: &HtmlElement, materials: Vec<&Building>) {
  for recipe in materials {
    for input in recipe.input {
      match input.entity {
        EntityOrTag::Entity(entity) => simple_line(container, &entity.img(), entity.name(), &input.amount),
        EntityOrTag::Tag(ref _tag) => {

          //Line::new(container).icon(&recipe.input.img()).label(recipe.input.name()).values("propValuePhase", |line| {
          //  line
          //    .img("valuePhaseTempIcon", icon)
          //    .value_align("valuePhaseTemp", &recipe.temp, &align)
          //    .value("valuePhaseArrow", "⟶")
          //    .foreach(recipe.output, |line, output| {
          //      line
          //        .img("valuePhaseIcon", &output.entity.img())
          //        .value("valuePhaseElement", output.entity.name())
          //        .value_filter("valuePhasePercent", &output.percent, output.percent.0 < 1.0)
          //    })
          //});
        }
      }
    }
  }
}
