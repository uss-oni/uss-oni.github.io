namespace USS {
  namespace Recipe {
    public class Seeds(string origin, float time, (string, float)[] dest): IRecipe {
      public string origin = origin;
      public float time = time;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);
      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::Seeds(Seeds {");
        file.WriteLine("input: &" + origin + ",");
        file.WriteLine("time: crate::units::Duration(" + time.ToString("0.000") + "),");
        file.WriteLine("output: &[");
        foreach (var item in dest)
        {
          file.WriteLine("EntityAmount{entity: &" + item.Key + ", amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
        }
        file.WriteLine("]");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine("""
pub struct Seeds {
  pub input: &'static Entity,
  pub time: crate::units::Duration,
  pub output: &'static[EntityAmount],
}              
""");
      }
    }
  }
}