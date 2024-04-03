namespace USS {
  namespace Recipe {
    public class Harvest(string origin, float time, (string, float)[] dest): IRecipe {
      public string origin = origin;
      public float time = time;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);
    }
  }
}