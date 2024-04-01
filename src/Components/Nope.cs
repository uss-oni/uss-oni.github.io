namespace USS
{
  public static partial class Components
  {
    public static void Get(Entity entity, SimTemperatureTransfer component) // Crash
    {
      return;
      //  entity.surfaceArea = component.SurfaceArea;
      //  entity.thickness = component.Thickness;
      //  entity.groundTransferScale = component.GroundTransferScale;
    }

    public static void Get(Entity entity, CopyBuildingSettings component) { } // No
    public static void Get(Entity entity, InvalidPortReporter component) { } // No
    public static void Get(Entity entity, KPrefabID component) { } // No
    public static void Get(Entity entity, Pickupable component) { } // No
    public static void Get(Entity entity, KSelectable component) { } // No
    public static void Get(Entity entity, SaveLoadRoot component) { } // No
    public static void Get(Entity entity, Prioritizable component) { } // No
    public static void Get(Entity entity, KBatchedAnimController component) { } // No
    public static void Get(Entity entity, Movable component) { } // No
    public static void Get(Entity entity, OccupyArea component) { } // No
    public static void Get(Entity entity, ElementChunk component) { } // No
    public static void Get(Entity entity, KCircleCollider2D component) { } // No
    public static void Get(Entity entity, KBoxCollider2D component) { } // No
    public static void Get(Entity entity, Dumpable component) { } // No
    public static void Get(Entity entity, SubstanceChunk component) { } // No
    public static void Get(Entity entity, Reconstructable component) { } // No
    public static void Get(Entity entity, Operational component) { } // No
    public static void Get(Entity entity, LoopingSounds component) { } // No
    public static void Get(Entity entity, AutoDisinfectable component) { } // No
    public static void Get(Entity entity, Disinfectable component) { } // No
  }
}