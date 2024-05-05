using UnityEngine;

namespace USS
{
  public class Entity
  {
    public string tag; //
    public string fr; //
    public Category menu = Category.NONE; //
    public List<string> components; //
    public List<string> smdef; //
    public float menu_order = 177013; // Random number big enough
    public string[] dlc; //
    public HashSet<string> tags; //
    public float? molar_mass; //
    public float? hardness; // Nothing
    public float? shc; //
    public float? strength; // Nothing
    public float? flow; // Nothing
    public float? max_compression; // Nothing
    public float? viscosity; // Nothing
    public float? min_horizontal_flow; // Nothing
    public float? min_vertical_flow; // Nothing
    public float? radiation_absorption_factor; //
    public float? thermal_conductivity; //
    public float? mass_per_unit; //
    public float? chunk_mass; //
    public string location_rule; //
    public string[] material_category; //
    public string rotations; //
    public bool? not_in_rocket; // Nothing
    public bool? only_in_rocket; // Nothing
    public float? generator_wattage_rating; // Nothing
    public List<float?> electrity_consummation; // Nothing
    public float? battery; // Nothing
    public float? external_heat; // Nothing
    public float? internal_heat; // Nothing
    public int? width; //
    public int? height; //
    public bool? invincible; // Nothing
    public int? hp; // Nothing
    public float? low_temp_warning; //
    public float? low_temp_fatal; //
    public float? high_temp_warning; //
    public float? high_temp_fatal; //
    public bool? transparent; // Nothing
    public float? mass; //
    public bool? debug; // Nothing
    public float? flood_threshold; //
    public float? decor; //
    public float? decor_radius; //
    public string primary_element; //
    public bool? clearable; // Nothing
    public float? max_radiation; // Nothing
    public float? age; // Nothing
    public float? battery_loss; // Nothing
    public float? calories_max; // Nothing
    public float? calories_loss; // Nothing
    public float? min_light; // Nothing
    public float? max_light; // Nothing
    public float? carry_amount; // Nothing
    public bool? deconstructable; // Nothing
    public bool? enableable; // Nothing
    public bool? provides_o2; // Nothing
    public float? launch_rate; // Nothing
    public float? radbolt_decay; // Nothing
    public float? radbolt_storage; // Nothing
    public List<object> divers;
    public List<string> links; //
    public List<(string, List<string>, float)> storages; 
    public float? work_time; // Nothing
    public float? lauch_speed; // Nothing
    public float? rotation_speed; // Nothing
    public float? range_max; // Nothing
    public float? range_min; // Nothing
    public float? scanning_angle; // Nothing
    public float? max_angle; // Nothing
    public float? scan_left; // Nothing
    public float? scan_right; // Nothing
    public string mode; //
    public float? num_capsules; // Nothing
    public bool? milk_consummer; // Nothing
    public float? space_per_critter; // Nothing
    public (float, float)? time_wait_plant_seed; // Nothing
    public (float, float)? time_wait_climb_tree; // Nothing
    public string[] friends; //
    public float? happy; // Nothing
    public float? glum; // Nothing
    public float? miserable;  // Nothing
    public float? quality; // Nothing
    public float? calories; // Nothing
    public float? spoil_time; // Nothing
    public float? light_absorption; // 
    public float? default_mass; //
    public List<string> trap_critters; //
    public int? add_tiles;
    public int? add_tiles_max_height;
    public int? add_tiles_min_height;
    public int? add_disease_count;
    public bool? affected_by_difficulty;
    public float? bunker_damage_multiplier;
    public int? entity_damage;
    public bool? can_hit_duplicants;
    public byte? disease_idx;
    public float? element_replace_tile_temperature_range_min;
    public float? element_replace_tile_temperature_range_max;
    public string[] loot_on_destroyed_by_missile;
    public float? window_damage_multiplier;
    public float? temperature_range_min;
    public float? temperature_range_max;
    public float? total_tile_damage;
    public float? mass_range_min;    
    public float? mass_range_max;
    public float? spawn_angle_min;
    public float? spawn_angle_max;
    public float? spawn_velocity_min;
    public float? spawn_velocity_max;
    public float? explosion_temperature_range_min;
    public float? explosion_temperature_range_max;
    public float? exhaust_rate;
    public string exhaust_element;
  }
}