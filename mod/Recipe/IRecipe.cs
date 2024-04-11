namespace USS
{
  namespace Recipe
  {
    public interface IRecipe
    {
      public void ToRust(StreamWriter file);
    }
  }
}