namespace USS
{
  namespace Recipe
  {
    public class Building((string, float)[] origin, float time, string dest) : IRecipe
    {
      public Dictionary<string, float> origin = origin.ToDictionary(d => d.Item1, d => d.Item2);
      public float time = time;
      public string dest = dest;
      public void ToRust(StreamWriter file)
      {
        if (!Dlc.DoNotWant(dest))
        {
          file.WriteLine("Recipe::Building(Building {");
          file.WriteLine("input: &[");
          foreach (var item in origin)
          {
            if (ElementLoader.elements.Find(e => e.tag.Name == item.Key) is not null)
              file.WriteLine("EntityOrTagAmount{entity: EntityOrTag::Entity(&" + item.Key + "), amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
            else
              file.WriteLine("EntityOrTagAmount{entity: EntityOrTag::Tag(Tag::" + item.Key + "), amount: crate::units::Kg(" + item.Value.ToString("0.000") + ")},");
          }
          file.WriteLine("],");
          file.WriteLine("time: crate::units::Duration(" + time.ToString("0.000") + "),");
          file.WriteLine("output: &" + dest + ",");
          file.WriteLine("}),");
        }
      }

      public static void ToRustClass(StreamWriter file)
      {
        file.WriteLine("""
pub struct Building {
  pub input: &'static[EntityOrTagAmount],
  pub time: crate::units::Duration,
  pub output: &'static Entity,
}              
""");
      }
    }
  }
}