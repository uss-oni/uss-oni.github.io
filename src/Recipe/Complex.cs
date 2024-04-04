using Database;

namespace USS {
  namespace Recipe {
    public class Complex((string, float)[] origin, float time, float temperature, string converter, (string, float)[] dest): IRecipe {
      public Dictionary<string, float> origin = origin.ToDictionary(d => d.Item1, d => d.Item2);
      public float time = time;
      public string converter = converter;
      public float temperature = temperature;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);
    }
  }
}