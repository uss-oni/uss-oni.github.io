namespace USS {
  namespace Recipe {
    public class Death(string origin, (string, float)[] dest): IRecipe {
      public string origin = origin;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);
    }
  }
}