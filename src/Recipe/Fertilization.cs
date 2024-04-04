namespace USS {
  namespace Recipe {
    public class Fertilization((string, float)[] origin, string dest): IRecipe {
      public Dictionary<string, float> origin = origin.ToDictionary(d => d.Item1, d => d.Item2);
      public string dest = dest;
    }
  }
}