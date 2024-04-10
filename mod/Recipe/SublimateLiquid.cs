namespace USS
{
  namespace Recipe
  {
    public class SublimateLiquid(string origin, float offgasPercent, float probability, float efficiency, float pressionMax, string dest) : IRecipe
    {
      public string origin = origin;
      public float pressionMax = pressionMax;
      public float offgasPercent = offgasPercent;
      public float efficiency = efficiency;
      public float probability = probability;
      public string dest = dest;
      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::SublimateLiquid(SublimateLiquid {");
        file.WriteLine("input: &" + origin + ",");
        file.WriteLine("pression_max: crate::units::Kg(" + pressionMax.ToString("0.000") + "),");
        file.WriteLine("offgas:" + offgasPercent.ToString("0.000") + ",");
        file.WriteLine("efficiency:  crate::units::Percent(" + efficiency.ToString("0.000") + "),");
        file.WriteLine("probability:  crate::units::Percent(" + probability.ToString("0.000") + "),");
        file.WriteLine("output: &" + dest + ",");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine ("""
pub struct SublimateLiquid {
  pub input: &'static Entity,
  pub pression_max: crate::units::Kg,
  pub offgas: f32,
  pub efficiency:  crate::units::Percent,
  pub probability:  crate::units::Percent,
  pub output: &'static Entity,
}              
""");
      }
    }
  }
}