namespace USS
{
  public class Recipe2(Recipe2.Type type, float? time = null, string converter = null)
  {
    public enum Type
    {
      Building,
      LowTemp,
      HighTemp,
      Sublimate,
      Rotting,
      Egg,
      Adult,
      Recipe,
      Birth,
      Death,
      Plant,
    }

    public enum Unit
    {
      Percent,
      KgPerSecond,
      Kg,
      Radbolt,
      Unit,
    }

    public class Ingredient(string tag, float? amount, Recipe2.Unit? unit, float? temperatureMin = null, float? temperatureMax = null, float? temperatureFixed = null, float? maxPressure = null, float? power = null, float? radbolt = null, string[] atmosphere = null)
    {
      public string tag = tag;
      public float? amount = amount;
      public Unit? unit = unit;
      public float? temperatureMin = temperatureMin;
      public float? temperatureMax = temperatureMax;
      public float? temperatureFixed = temperatureFixed;
      public float? maxPressure = maxPressure;
      public float? power = power;
      public float? radbolt = radbolt;
      public string[] atmosphere = atmosphere;
    }

    public Type type = type;
    public float? time = time;
    public string converter = converter;
    public List<Ingredient> input;
    public List<Ingredient> output;

    public Recipe2 AddInput<T>(T tag,  float? kg = null, float? percent = null, float? kgPerSecond = null, float? temperatureMin = null, float? temperatureMax = null, float? temperatureFixed = null, float? maxPressure = null, float? power = null, float? radbolt = null, string[] atmosphere = null)
    {
      input ??= [];
      input.Add(Convert(tag, kg, percent, kgPerSecond, temperatureMin, temperatureMax, temperatureFixed, maxPressure, power, radbolt, atmosphere));
      return this;
    }

    public Recipe2 AddOutput<T>(T tag, float? kg = null, float? percent = null, float? kgPerSecond = null, float? temperatureMin = null, float? temperatureMax = null, float? temperatureFixed = null, float? maxPressure = null, float? power = null, float? radbolt = null, string[] atmosphere = null)
    {
      output ??= [];
      output.Add(Convert(tag, kg, percent, kgPerSecond, temperatureMin, temperatureMax, temperatureFixed, maxPressure, power, radbolt, atmosphere));
      return this;
    }
    private Ingredient Convert<T>(T tag, float? kg = null, float? percent = null, float? kgPerSecond = null, float? temperatureMin = null, float? temperatureMax = null, float? temperatureFixed = null, float? maxPressure = null, float? power = null, float? radbolt = null, string[] atmosphere = null)
    {
      Unit? unit = null;
      float? amount = null;
      if (kg is not null)
      {
        amount = kg;
        unit = Unit.Kg;
      }
      else if (percent is not null)
      {
        amount = percent;
        unit = Unit.Percent;
      }
      else if (kgPerSecond is not null)
      {
        amount = kgPerSecond;
        unit = Unit.KgPerSecond;
      }

      string name = "";
      if (tag is string str)
      {
        name = str;
      }
      else if (tag is Tag tagName)
      {
        name = tagName.Name;
      }
      else if (tag is SimHashes simHashes)
      {
        name = simHashes.CreateTag().Name;
      }

      if (amount == 1f && unit == Unit.Percent)
      {
        amount = null;
        unit = null;
      }
      return new Ingredient(name, amount, unit, temperatureMin, temperatureMax, temperatureFixed, maxPressure, power, radbolt, atmosphere);
    }
  }
}