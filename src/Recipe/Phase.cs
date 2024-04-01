namespace USS {
  namespace Recipe {
    public class Phase(string origin, string type, float temp, (string, float)[] dest): IRecipe {
      public string origin = origin;
      public string type = type;
      public float temp = temp;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);
    }
  }
}