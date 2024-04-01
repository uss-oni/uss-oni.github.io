namespace USS {
  namespace Recipe {
    public class Rotting(string origin, float time,string dest): IRecipe {
      public string origin = origin;
      public float time = time;
      public string dest = dest;
    }
  }
}