using System.Text.RegularExpressions;

namespace USS
{
  public class Translation
  {
    public string name;
    public string desc;
    public Translation() { }
    public Translation((string name, string desc) t)
    {
      name = RemoveLink(t.name);
      desc = RemoveLink(t.desc);
    }

    public static implicit operator Translation((string, string) t) => new(t);
    public static string RemoveLink(string str)
    {
      if (str is not null)
      {
        var regex = Regex.Replace(str, "(.*?)<link[^>]+>(.*?)</link>", "$1$2");
        return Regex.Replace(regex, "(.*?)<style[^>]+>(.*?)</style>", "$1$2")
                    .Replace("\n\n", "<br>")
                    .Replace("\n", "<br>");
      }
      return "null";
    }
  }
}