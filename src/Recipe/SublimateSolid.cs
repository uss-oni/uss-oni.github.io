namespace USS
{
  namespace Recipe
  {
    public class SublimateSolid(string origin, float rate, float probability, float efficiency, float pressionMax, string dest) : IRecipe
    {
      public string origin = origin;
      public float pressionMax = pressionMax;
      public float rate = rate;
      public float efficiency = efficiency;
      public float probability = probability;
      public string dest = dest;
    }
  }
}