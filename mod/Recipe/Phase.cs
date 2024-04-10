namespace USS {
  namespace Recipe {
    public class Phase(string origin, string type, float temp, (string, float)[] dest): IRecipe {
      public string origin = origin;
      public string type = type;
      public float temp = temp;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);

      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::Phase(Phase {");
        file.WriteLine("input: &" + origin + ",");
        file.WriteLine("temp: crate::units::Temperature(" + temp.ToString("0.000") + "),");
        file.WriteLine("type_of: PhaseType::" + type[0].ToString().ToUpper() + type.Substring(1) + ",");
        file.WriteLine("output: &[");
        foreach (var item in dest)
        {
          file.WriteLine("EntityPercent{entity: &" + item.Key + ", percent: crate::units::Percent(" + item.Value.ToString("0.000") + ")},");
        }
        file.WriteLine("]");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine("""
pub enum PhaseType {
  Cooking,
  Melting,
  Solidification,
  Vaporization,
  Freezing,
  Sublimation,
  Condensation,
  Transmutation,
}
pub struct Phase {
  pub input: &'static Entity,
  pub temp: crate::units::Temperature,
  pub type_of: PhaseType,
  pub output: &'static[EntityPercent],
}              
""");
      }
    }
  }
}