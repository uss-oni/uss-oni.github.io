
using static USS.DB;

namespace USS
{
  public static partial class Components
  {
    public static void Get(Entity entity, PrimaryElement component)
    {
      if (component.ElementID != 0)
      {
        var tag = component.ElementID.CreateTag();
        if (db[tag].molarMass is null) // First time
        {
          Elements.Get(tag);
        }
        entity.primaryElement = tag.Name;
      }
      entity.mass = component.Mass;
    }
  }
}