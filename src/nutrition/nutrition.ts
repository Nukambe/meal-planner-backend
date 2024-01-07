export type Nutrient = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};

export class Nutrition {
  public calories?: Nutrient;
  public fat?: Nutrient;
  public saturatedFat?: Nutrient;
  public cholesterol?: Nutrient;
  public sodium?: Nutrient;
  public potassium?: Nutrient;
  public carbohydrates?: Nutrient;
  public fiber?: Nutrient;
  public sugar?: Nutrient;
  public protein?: Nutrient;
  public vitaminA?: Nutrient;
  public vitaminC?: Nutrient;
  public calcium?: Nutrient;
  public iron?: Nutrient;

  constructor(nutrients: Nutrient[]) {
    this.parseNutrients(nutrients);
  }

  private parseNutrients(nutrients: Nutrient[]) {
    nutrients.forEach((nutrient) => {
      if (nutrient.name === 'Calories') this.calories = nutrient;
      if (nutrient.name === 'Fat') this.fat = nutrient;
      if (nutrient.name === 'Saturated Fat') this.saturatedFat = nutrient;
      if (nutrient.name === 'Carbohydrates') this.carbohydrates = nutrient;
      if (nutrient.name === 'Fiber') this.fiber = nutrient;
      if (nutrient.name === 'Sugar') this.sugar = nutrient;
      if (nutrient.name === 'Protein') this.protein = nutrient;
      if (nutrient.name === 'Cholesterol') this.cholesterol = nutrient;
      if (nutrient.name === 'Sodium') this.sodium = nutrient;
      if (nutrient.name === 'Potassium') this.potassium = nutrient;
      if (nutrient.name === 'Vitamin A') this.vitaminA = nutrient;
      if (nutrient.name === 'Vitamin C') this.vitaminC = nutrient;
      if (nutrient.name === 'Calcium') this.calcium = nutrient;
      if (nutrient.name === 'Iron') this.iron = nutrient;
    });
  }
}
