namespace USS {
  namespace Recipe {
    public class Building((string, float)[] origin, float time, string dest): IRecipe {
      public Dictionary<string, float> origin = origin.ToDictionary(d => d.Item1, d => d.Item2);
      public float time = time;
      public string dest = dest;
    }
  }
}