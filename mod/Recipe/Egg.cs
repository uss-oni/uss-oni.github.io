namespace USS
{
  namespace Recipe
  {
    public class Egg(string origin, float time, (string, float)[] dest) : IRecipe
    {
      public string origin = origin;
      public float time = time;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);

      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::Egg(Egg {");
        file.WriteLine("input: &" + origin + ",");
        file.WriteLine("time: crate::units::Duration(" + time.ToString("0.000") + "),");
        file.WriteLine("output: &[");
        foreach (var item in dest)
        {
          file.WriteLine("EntityPercent{entity: &" + item.Key + ", percent: crate::units::Percent(" + item.Value.ToString() + ")},");
        }
        file.WriteLine("]");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine("""
pub struct Egg {
  pub input: &'static Entity,
  pub time: crate::units::Duration,
  pub output: &'static[EntityPercent],
}              
""");
      }

    }
  }
}