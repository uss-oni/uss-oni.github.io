namespace USS
{
  namespace Recipe
  {
    public class SublimateLiquid(string origin, float offgasPercent, float probability, float efficiency, float pressionMax, string dest) : IRecipe
    {
      public string origin = origin;
      public float pressionMax = pressionMax;
      public float offgasPercent = offgasPercent;
      public float efficiency = efficiency;
      public float probability = probability;
      public string dest = dest;
    }
  }
}