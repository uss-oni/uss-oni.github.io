using Database;

namespace USS
{
  namespace Recipe
  {
    public class Complex((string, float)[] origin, float time, float temperature, string converter, (string, float)[] dest) : IRecipe
    {
      public Dictionary<string, float> origin = origin.ToDictionary(d => d.Item1, d => d.Item2);
      public float time = time;
      public string converter = converter;
      public float temperature = temperature;
      public Dictionary<string, float> dest = dest.ToDictionary(d => d.Item1, d => d.Item2);
      public void ToRust(StreamWriter file)
      {
        file.WriteLine("Recipe::Complex(Complex {");
        file.WriteLine("input: &[");
        foreach (var item in origin)
        {
          if (Assets.Prefabs.Find(e => e.PrefabID().Name == item.Key) is not null)
            file.WriteLine("EntityOrTagAmount{entity: EntityOrTag::Entity(&" + item.Key + "), amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
          else
            file.WriteLine("EntityOrTagAmount{entity: EntityOrTag::Tag(Tag::" + item.Key + "), amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
        }
        file.WriteLine("],");
        file.WriteLine("time: crate::units::Duration(" + time.ToString("0.000") + "),");
        file.WriteLine("temperature: crate::units::Temperature(" + temperature.ToString("0.000") + "),");
        file.WriteLine("converter: &" + converter + ",");
        file.WriteLine("output: &[");
        foreach (var item in dest)
        {
          if (Assets.Prefabs.Find(e => e.PrefabID().Name == item.Key) is not null)
            file.WriteLine("EntityOrTagAmount{entity: EntityOrTag::Entity(&" + item.Key + "), amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
          else
            file.WriteLine("EntityOrTagAmount{entity: EntityOrTag::Tag(Tag::" + item.Key + "), amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
        }
        file.WriteLine("],");
        file.WriteLine("}),");
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine("""
pub struct Complex {
  pub input: &'static[EntityOrTagAmount],
  pub time: crate::units::Duration,
  pub temperature: crate::units::Temperature,
  pub converter: &'static Entity,
  pub output: &'static[EntityOrTagAmount],
}              
""");
      }
    }
  }
}