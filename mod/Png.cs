
using UnityEngine;

namespace USS
{
  public class Png
  {
    public static string imagesPath;

    public static void Create(string name, Sprite source, Color color)
    {
      return;
      RenderTexture renderTexture = RenderTexture.GetTemporary(
        source.texture.width,
        source.texture.height,
        0,
        RenderTextureFormat.Default,
        RenderTextureReadWrite.Linear);
      Graphics.Blit(source.texture, renderTexture);
      RenderTexture previous = RenderTexture.active;
      RenderTexture.active = renderTexture;
      Texture2D texture2d = new((int)source.textureRect.width, (int)source.textureRect.height);
      texture2d.ReadPixels(new Rect((int)source.textureRect.x, (int)source.textureRect.y, renderTexture.width, renderTexture.height), 0, 0);
      texture2d.Apply();
      RenderTexture.active = previous;
      RenderTexture.ReleaseTemporary(renderTexture);
      for (int i = 0; i < texture2d.width; i++)
      {
        for (int j = 0; j < texture2d.height; j++)
        {
          texture2d.SetPixel(i, j, color * texture2d.GetPixel(i, j));
        }
      }
      Directory.CreateDirectory(Path.Combine(imagesPath, name[0].ToString().ToUpper()));
      File.WriteAllBytes(Path.Combine(imagesPath, name[0].ToString().ToUpper(), name + ".png"), texture2d.EncodeToPNG());
    }    
    
    public static void Create(object obj, Tag name, string facade = "")
    {
      var t = Def.GetUISprite(obj);
      Create(name.Name, t.first, t.second);
    }
    public static void Create(Tag name, string facade = "")
    {
      var t = Def.GetUISprite(name, facade);
      Create(name.Name, t.first, t.second);
    }
    public static void Create(string name, KAnimFile anim, string animName)
    {
      Create(name, Def.GetUISpriteFromMultiObjectAnim(anim, animName), Color.white);
    }

    public static void Create(string name, Sprite source)
    {
      
      Create(name, source, Color.white);
    }
  }
}