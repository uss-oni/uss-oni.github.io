using static USS.DB;

namespace USS
{
  public class Category
  {
    public static Dictionary<string, Dictionary<string, string>> menu = [];
    public static Category NONE = new("NONE", "NONE", "NONE", "NONE");
    public static Category TOREMOVE = new("NONE", "NONE", "TOREMOVE", "TOREMOVE");
    public class Element(string sub, string translation)
    : Category("Element", STRINGS.UI.CODEX.SUBWORLDS.ELEMENTS, sub, translation)
    {
      public static Element Gas = new("Gas", STRINGS.ELEMENTS.STATE.GAS);
      public static Element Solid = new("Solid", STRINGS.ELEMENTS.STATE.SOLID);
      public static Element Liquid = new("Liquid", STRINGS.ELEMENTS.STATE.LIQUID);
      public static Element Other = new("Other", STRINGS.MISC.TAGS.OTHER);
    }

    public class Food(string sub, string translation)
    : Category("Food", STRINGS.UI.CODEX.CATEGORYNAMES.FOOD, sub, translation)
    {
      public static Food Cooked = new("Cooked", "Cooked");
      public static Food Foraged = new("Raw", "Foraged");
      public static Food Dehydrated = new("Dehydrated", STRINGS.MISC.TAGS.DEHYDRATED);
      public static Food Ingredient = new("Ingredient", STRINGS.MISC.TAGS.COOKINGINGREDIENT);
    }
    public class Building(string sub, string translation)
    : Category("Building", STRINGS.UI.CODEX.CATEGORYNAMES.BUILDINGS, sub, translation)
    {
      public static Building Lander = new("Lander", "Lander");
      public static Building RocketModule = new("RocketModule", STRINGS.UI.UISIDESCREENS.ROCKETMODULESIDESCREEN.TITLE);
      public static Building Gravitas = new("Gravitas", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.GRAVITAS);
      public static Building Quest = new("Quest", STRINGS.UI.CODEX.CATEGORYNAMES.STORYTRAITS);
    }

    public class Equipment(string sub, string translation)
    : Category("Equipment", STRINGS.UI.CODEX.CATEGORYNAMES.EQUIPMENT, sub, translation)
    {
      public static Equipment Clothes = new("Clothes", STRINGS.EQUIPMENT.PREFABS.CUSTOMCLOTHING.GENERICNAME);
      public static Equipment Suit = new("Suit", STRINGS.EQUIPMENT.PREFABS.ATMO_SUIT.GENERICNAME);
      public static Equipment Worn = new("Worn", "Worn");
    }

    public class Space(string sub, string translation)
    : Category("Space", STRINGS.SUBWORLDS.SPACE.NAME, sub, translation)
    {
      public static Space Comet = new("Comet", STRINGS.NAMEGEN.COLONY.NOUN.COMET);
      public static Space Shower = new("Shower", STRINGS.UI.COLONY_DIAGNOSTICS.METEORDIAGNOSTIC.ALL_NAME);
      public static Space ArtifactPOI = new("ArtifactPOI", "Artifacts");
      public static Space HarvestablePOI = new("HarvestablePOI", "HarvestablePOI");
    }

    public class Geyser(string sub, string translation)
    : Category("Geyser", STRINGS.UI.CODEX.CATEGORYNAMES.GEYSERS, sub, translation)
    {
      public static Geyser Base = new("Geyser", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.GEYSERS);
    }

    public class Critter(string sub, string translation)
    : Category("Critter", STRINGS.UI.CODEX.CATEGORYNAMES.CREATURES, sub, translation)
    {
      public static Critter Base = new("Critter", STRINGS.UI.CODEX.CATEGORYNAMES.CREATURES);
      public static Critter Baby = new("Baby", "Baby");
      public static Critter Robot = new("Robot", STRINGS.ROBOTS.CATEGORY_NAME);
      public static Critter Egg = new ("Egg", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.CREATURE_EGG);
    }


    public class Plant(string sub, string translation)
    : Category("Plant", STRINGS.UI.CODEX.CATEGORYNAMES.PLANTS, sub, translation)
    {
      public static Plant Crop = new("Crop", STRINGS.UI.COLONY_DIAGNOSTICS.FARMDIAGNOSTIC.ALL_NAME);
      public static Plant Foregeable = new("Forage", "Forage");
      public static Plant Decor = new("Decor", STRINGS.CODEX.BLISSBURST.SUBTITLE);
      public static Plant CropSeed = new("CropSeed",  STRINGS.UI.COLONY_DIAGNOSTICS.FARMDIAGNOSTIC.ALL_NAME);
      public static Plant DecorSeed = new("DecorSeed", STRINGS.CODEX.BLISSBURST.SUBTITLE);
    }

    public class Misc(string sub, string translation)
    : Category("Misc", STRINGS.MISC.TAGS.OTHER, sub, translation)
    {
      public static Misc Medicine = new("Medicine", STRINGS.MISC.TAGS.MEDICINE);
      public static Misc Dupe = new("Dupe", STRINGS.DUPLICANTS.STATS.SUBJECTS.DUPLICANT_PLURAL);
      public static Misc Industrial = new("Industrial", STRINGS.MISC.TAGS.INDUSTRIALPRODUCT);
      public static Misc Quest = new("Quest", STRINGS.UI.CODEX.CATEGORYNAMES.STORYTRAITS);

      public static Misc Other = new("Other", STRINGS.MISC.TAGS.OTHER);
    }
    public class Artifact(string sub, string translation)
    : Category("Artifact", STRINGS.UI.SANDBOXTOOLS.FILTERS.ENTITIES.ARTIFACTS, sub, translation)
    {
      public static Artifact Quest = new("Quest", STRINGS.UI.CODEX.CATEGORYNAMES.STORYTRAITS);
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