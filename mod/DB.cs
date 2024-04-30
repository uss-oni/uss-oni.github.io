using System.Runtime.CompilerServices;
using Database;
using STRINGS;

namespace USS
{
  public static class DB {
    public static Db<Entity> db = new();
    public static List<Recipe.IRecipe> recipes = [];
    public static Db<Translation> translations = new();
  }
  public class Db<T> where T : new()
  {
    
    public Dictionary<string, T> dico = [];
    public T this[string id]
    {
      get
      {
        if (dico.TryGetValue(id, out T entity))
          return entity;
        dico.Add(id, new T());
        return dico[id];
      }
      set
      {
        dico[id] = value;
      }
    }

    public T this[Tag id]
    {
      get
      {
        return this[id.Name];
      }
      set
      {
        this[id.Name] = value;
      }
    }

    public T this[SimHashes id]
    {
      get
      {
        return this[id.CreateTag()];
      }
      set
      {
        this[id.CreateTag()] = value;
      }
    }
  }
}