namespace USS {
  namespace Recipe {
    public class Fertilization((string, float)[] origin, string dest): IRecipe {
      public Dictionary<string, float> origin = origin.ToDictionary(d => d.Item1, d => d.Item2);
      public string dest = dest;
      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::Fertilization(Fertilization {");
        file.WriteLine("input: &[");
        foreach (var item in origin) {
          file.WriteLine("EntityAmount{entity: &" + item.Key + ", amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
        }
        file.WriteLine("],");
        file.WriteLine("output: &" + dest + ",");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine ("""
pub struct Fertilization {
  pub input: &'static[EntityAmount],
  pub output: &'static Entity,
}              
""");
      }
    }
  }
}