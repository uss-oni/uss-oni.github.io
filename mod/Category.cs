using static USS.DB;

namespace USS
{
  public class Category
  {
    public static Dictionary<string, Dictionary<string, string>> menu = [];
    public static Category NONE = new("none", "none", "none", "none");
    public static Category TOREMOVE = new("none", "none", "TOREMOVE", "TOREMOVE");
    public class Element(string sub, string translation)
    : Category("element", STRINGS.UI.CODEX.SUBWORLDS.ELEMENTS, sub, translation)
    {
      public static Element Gas = new("gas", STRINGS.ELEMENTS.STATE.GAS);
      public static Element Solid = new("solid", STRINGS.ELEMENTS.STATE.SOLID);
      public static Element Liquid = new("liquid", STRINGS.ELEMENTS.STATE.LIQUID);
      public static Element Other = new("other", STRINGS.MISC.TAGS.OTHER);
    }

    public class Food(string sub, string translation)
    : Category("food", STRINGS.UI.CODEX.CATEGORYNAMES.FOOD, sub, translation)
    {
      public static Food Cooked = new("cooked", "Cooked");
      public static Food Foraged = new("raw", "Foraged");
      public static Food Dehydrated = new("dehydrated", STRINGS.MISC.TAGS.DEHYDRATED);
      public static Food Ingredient = new("ingredient", STRINGS.MISC.TAGS.COOKINGINGREDIENT);
    }
    public class Building(string sub, string translation)
    : Category("building", STRINGS.UI.CODEX.CATEGORYNAMES.BUILDINGS, sub, translation)
    {
      public static Building Lander = new("lander", "Lander");
      public static Building RocketModule = new("rocketModule", STRINGS.UI.UISIDESCREENS.ROCKETMODULESIDESCREEN.TITLE);
      public static Building Gravitas = new("gravitas", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.GRAVITAS);
      public static Building Quest = new("quest", STRINGS.UI.CODEX.CATEGORYNAMES.STORYTRAITS);
    }

    public class Equipment(string sub, string translation)
    : Category("equipment", STRINGS.UI.CODEX.CATEGORYNAMES.EQUIPMENT, sub, translation)
    {
      public static Equipment Clothes = new("clothes", STRINGS.EQUIPMENT.PREFABS.CUSTOMCLOTHING.GENERICNAME);
      public static Equipment Suit = new("suit", STRINGS.EQUIPMENT.PREFABS.ATMO_SUIT.GENERICNAME);
      public static Equipment Worn = new("worn", "Worn");
    }

    public class Space(string sub, string translation)
    : Category("space", STRINGS.SUBWORLDS.SPACE.NAME, sub, translation)
    {
      public static Space Comet = new("comet", STRINGS.NAMEGEN.COLONY.NOUN.COMET);
      public static Space Shower = new("shower", STRINGS.UI.COLONY_DIAGNOSTICS.METEORDIAGNOSTIC.ALL_NAME);
      public static Space ArtifactPOI = new("artifact", "Artifacts");
      public static Space HarvestablePOI = new("harvestable", "HarvestablePOI");
    }

    public class Geyser(string sub, string translation)
    : Category("geyser", STRINGS.UI.CODEX.CATEGORYNAMES.GEYSERS, sub, translation)
    {
      public static Geyser Base = new("geyser", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.GEYSERS);
    }

    public class Critter(string sub, string translation)
    : Category("critter", STRINGS.UI.CODEX.CATEGORYNAMES.CREATURES, sub, translation)
    {
      public static Critter Base = new("critter", STRINGS.UI.CODEX.CATEGORYNAMES.CREATURES);
      public static Critter Baby = new("baby", "Baby");
      public static Critter Robot = new("robot", STRINGS.ROBOTS.CATEGORY_NAME);
      public static Critter Egg = new ("egg", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.CREATURE_EGG);
    }


    public class Plant(string sub, string translation)
    : Category("plant", STRINGS.UI.CODEX.CATEGORYNAMES.PLANTS, sub, translation)
    {
      public static Plant Crop = new("crop", STRINGS.UI.COLONY_DIAGNOSTICS.FARMDIAGNOSTIC.ALL_NAME);
      public static Plant Foregeable = new("forage", "Forage");
      public static Plant Decor = new("decor", STRINGS.CODEX.BLISSBURST.SUBTITLE);
      public static Plant CropSeed = new("cropSeed",  STRINGS.UI.COLONY_DIAGNOSTICS.FARMDIAGNOSTIC.ALL_NAME);
      public static Plant DecorSeed = new("decorSeed", STRINGS.CODEX.BLISSBURST.SUBTITLE);
    }

    public class Misc(string sub, string translation)
    : Category("misc", STRINGS.MISC.TAGS.OTHER, sub, translation)
    {
      public static Misc Medicine = new("medicine", STRINGS.MISC.TAGS.MEDICINE);
      public static Misc Dupe = new("dupe", STRINGS.DUPLICANTS.STATS.SUBJECTS.DUPLICANT_PLURAL);
      public static Misc Industrial = new("industrial", STRINGS.MISC.TAGS.INDUSTRIALPRODUCT);
      public static Misc Quest = new("quest", STRINGS.UI.CODEX.CATEGORYNAMES.STORYTRAITS);

      public static Misc Other = new("other", STRINGS.MISC.TAGS.OTHER);
    }
    public class Artifact(string sub, string translation)
    : Category("artifact", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.ARTIFACTS, sub, translation)
    {
      public static Artifact Quest = new("quest", STRINGS.UI.CODEX.CATEGORYNAMES.STORYTRAITS);
    }

    public string category;
    public string subCategory;
    public Category(string category, string categoryTranslation, string subCategory, string subCategoryTranslation)
    {
      this.category = category;
      this.subCategory = subCategory;
      if (!menu.TryGetValue(category, out var cat)) {
        cat = [];
        menu[category] = cat;
      }
      cat["Category"] = Translation.RemoveLink(categoryTranslation);
      cat[subCategory] = Translation.RemoveLink(subCategoryTranslation);
    }
  }
}