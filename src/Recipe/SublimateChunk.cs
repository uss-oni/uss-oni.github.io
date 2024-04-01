namespace USS {
  namespace Recipe {
    public class SublimateChunk(string origin, float rate, float power, float tempMin, float minAmount, float pressionMax, string dest): IRecipe {
      public string origin = origin;
      public float pressionMax = pressionMax;
      public float rate = rate;
      public float tempMin = tempMin;
      public float minAmount = minAmount;
      public float power = power;
      public string dest = dest;
    }
  }
}