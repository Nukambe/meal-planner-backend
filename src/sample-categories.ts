import { Category } from './categories/entities/category.entity';

import { meals } from './sample-meals';

export const categories: Category[] = [
  new Category(
    0,
    'All',
    'All meals',
    meals.map((meal) => meal.id),
  ),
  new Category(1, 'Indian', 'Indian food', [1, 3]),
  new Category(2, 'American', 'American food', [2]),
  new Category(3, 'Vegan', 'Vegan food', [3]),
];
