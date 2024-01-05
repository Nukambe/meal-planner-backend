export type Nutrition = {
  readonly calories?: number;
  readonly protein?: number;
  readonly carbs?: {
    total?: number;
    fiber?: number;
    sugar?: { total?: number; added?: number };
  };
  readonly fat?: { total?: number; saturated?: number; trans?: number };
  readonly cholesterol?: number;
  readonly sodium?: number;
  readonly potassium?: number;
  readonly calcium?: number;
  readonly iron?: number;
  readonly vitaminD?: number;
};
