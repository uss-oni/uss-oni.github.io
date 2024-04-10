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
      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::SublimateChunk(SublimateChunk {");
        file.WriteLine("input: &" + origin + ",");
        file.WriteLine("pression_max: crate::units::Kg(" + pressionMax.ToString("0.000") + "),");
        file.WriteLine("rate:" + rate.ToString("0.000") + ",");
        file.WriteLine("temp_min: crate::units::Temperature(" + tempMin.ToString("0.000") + "),");
        file.WriteLine("min_amount: crate::units::Kg(" + minAmount.ToString("0.000") + "),");
        file.WriteLine("power:" + power.ToString("0.000") + ",");
        file.WriteLine("output: &" + dest + ",");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine ("""
pub struct SublimateChunk {
  pub input: &'static Entity,
  pub pression_max: crate::units::Kg,
  pub rate: f32,
  pub temp_min: crate::units::Temperature,
  pub min_amount: crate::units::Kg,
  pub power: f32,
  pub output: &'static Entity,
}              
""");
      }

    }
  }
}