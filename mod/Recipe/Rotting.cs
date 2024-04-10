namespace USS {
  namespace Recipe {
    public class Rotting(string origin, float time,string dest): IRecipe {
      public string origin = origin;
      public float time = time;
      public string dest = dest;
      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::Rotting(Rotting {");
        file.WriteLine("input: &" + origin + ",");
        file.WriteLine("time: crate::units::Duration(" + time.ToString("0.000") + "),");
        file.WriteLine("output: &" + dest + ",");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine ("""
pub struct Rotting {
  pub input: &'static Entity,
  pub time: crate::units::Duration,
  pub output: &'static Entity,
}              
""");
      }
    }
  }
}