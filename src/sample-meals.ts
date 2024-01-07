// import { Meal } from './meals/entities/meal.entity';
// import { Recipe } from './meals/recipes/entities/recipe.entity';
// import { Ingredient } from './ingredient/ingredient';
// import { Nutrition } from './nutrition/nutrition';

// const chickenTikkaMasala = new Meal(
//   1,
//   'Chicken Tikka Masala',
//   'A delicious Indian dish',
//   new Recipe(
//     ['oven', 'pot', 'pan'],
//     [
//       new Ingredient(1, 'Chicken', 1, 'lb', new Nutrition(100, 10, 0, 10)),
//       new Ingredient(
//         2,
//         'Masala Sauce',
//         1,
//         'cup',
//         new Nutrition(100, 10, 0, 10),
//       ),
//     ],
//     [
//       'Preheat oven to 375 degrees F (190 degrees C).',
//       'Place chicken in a baking dish. Bake in the preheated oven for 20 minutes, or until no longer pink.',
//       'Meanwhile, melt butter in a skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with garam masala and cumin. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.',
//     ],
//   ),
//   {
//     calories: 500,
//     fat: 20,
//     carbohydrates: 35,
//     protein: 40,
//   },
//   { hours: 0, minutes: 10 },
//   { hours: 0, minutes: 30 },
//   'dinner',
//   'indian',
//   ['spicy', 'chicken', 'indian'],
//   'https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg',
// );
// const primeRibCheesesteak = new Meal(
//   2,
//   'Prime Rib Cheesesteak',
//   'A delicious American dish',
//   new Recipe(
//     ['oven', 'pan'],
//     [
//       new Ingredient(3, 'Prime Rib', 1, 'lb', new Nutrition(100, 10, 0, 10)),
//       new Ingredient(4, 'Cheese', 1, 'cup', new Nutrition(100, 10, 0, 10)),
//     ],
//     [
//       'Preheat oven to 375 degrees F (190 degrees C).',
//       'Place prime rib in a baking dish. Bake in the preheated oven for 20 minutes, or until no longer pink.',
//       'Meanwhile, melt butter in a skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with garam masala and cumin. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.',
//     ],
//   ),
//   {
//     calories: 500,
//     fat: 20,
//     carbohydrates: 35,
//     protein: 40,
//   },
//   { hours: 0, minutes: 10 },
//   { hours: 0, minutes: 30 },
//   'dinner',
//   'american',
//   ['cheese', 'beef', 'american'],
//   'https://www.mashed.com/img/gallery/arbys-has-good-news-for-fans-of-its-popular-cheesesteak/l-intro-1661302387.jpg',
// );
// const veganCurry = new Meal(
//   3,
//   'Vegan Curry',
//   'A delicious Vegan dish',
//   new Recipe(
//     ['oven', 'pot', 'pan'],
//     [
//       new Ingredient(5, 'Tofu', 1, 'lb', new Nutrition(100, 10, 0, 10)),
//       new Ingredient(6, 'Curry Sauce', 1, 'cup', new Nutrition(100, 10, 0, 10)),
//     ],
//     [
//       'Preheat oven to 375 degrees F (190 degrees C).',
//       'Place tofu in a baking dish. Bake in the preheated oven for 20 minutes, or until no longer pink.',
//       'Meanwhile, melt butter in a skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with garam masala and cumin. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.',
//     ],
//   ),
//   {
//     calories: 500,
//     fat: 20,
//     carbohydrates: 35,
//     protein: 40,
//   },
//   { hours: 0, minutes: 10 },
//   { hours: 0, minutes: 30 },
//   'dinner',
//   'indian',
//   ['spicy', 'tofu', 'indian', 'vegan'],
//   'https://www.noracooks.com/wp-content/uploads/2022/08/vegan-curry-8.jpg',
// );

// const italianMeatballs = new Meal(
//   4,
//   'Italian Meatballs',
//   'A delicious Italian dish',
//   new Recipe(
//     ['oven', 'pot', 'pan'],
//     [
//       new Ingredient(5, 'Tofu', 1, 'lb', new Nutrition(100, 10, 0, 10)),
//       new Ingredient(6, 'Curry Sauce', 1, 'cup', new Nutrition(100, 10, 0, 10)),
//     ],
//     [
//       'Preheat oven to 375 degrees F (190 degrees C).',
//       'Place tofu in a baking dish. Bake in the preheated oven for 20 minutes, or until no longer pink.',
//       'Meanwhile, melt butter in a skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with garam masala and cumin. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.',
//     ],
//   ),
//   {
//     calories: 500,
//     fat: 20,
//     carbohydrates: 35,
//     protein: 40,
//   },
//   { hours: 0, minutes: 10 },
//   { hours: 0, minutes: 30 },
//   'dinner',
//   'italian',
//   ['spicy', 'tofu', 'italian'],
//   'https://www.simplyrecipes.com/thmb/kO2yxG-lT4gNjwLAREAbrspEsgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__italian-meatballs-horiz-c-1800-e83b24e913364fd6b867805335961d65.jpg',
// );

// const wasabiRamen = new Meal(
//   5,
//   'Wasabi Ramen',
//   'A delicious Japanese dish',
//   new Recipe(
//     ['oven', 'pot', 'pan'],
//     [
//       new Ingredient(5, 'Tofu', 1, 'lb', new Nutrition(100, 10, 0, 10)),
//       new Ingredient(6, 'Curry Sauce', 1, 'cup', new Nutrition(100, 10, 0, 10)),
//     ],
//     [
//       'Preheat oven to 375 degrees F (190 degrees C).',
//       'Place tofu in a baking dish. Bake in the preheated oven for 20 minutes, or until no longer pink.',
//       'Meanwhile, melt butter in a skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with garam masala and cumin. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.',
//     ],
//   ),
//   {
//     calories: 500,
//     fat: 20,
//     carbohydrates: 35,
//     protein: 40,
//   },
//   { hours: 0, minutes: 10 },
//   { hours: 0, minutes: 30 },
//   'dinner',
//   'japanese',
//   ['spicy', 'tofu', 'japanese'],
//   'https://images.squarespace-cdn.com/content/v1/53596149e4b06021df9a929b/1588723330721-86GS7OJAO0NWKSHKAAFM/DSC_0096.jpeg',
// );
// const gourmetLasagna = new Meal(
//   11,
//   'Gourmet Lasagna',
//   'A decadent and rich lasagna with layers of pasta, meat sauce, and creamy béchamel.',
//   new Recipe(
//     ['oven', 'pot', 'pan'],
//     [
//       new Ingredient(
//         1,
//         'Lasagna Noodles',
//         1,
//         'box',
//         new Nutrition(400, 5, 80, 15),
//       ),
//       new Ingredient(
//         2,
//         'Ground Beef',
//         1.5,
//         'lbs',
//         new Nutrition(600, 40, 0, 55),
//       ),
//       new Ingredient(
//         3,
//         'Italian Sausage',
//         1,
//         'lb',
//         new Nutrition(800, 60, 5, 25),
//       ),
//       new Ingredient(
//         4,
//         'Tomato Sauce',
//         3,
//         'cups',
//         new Nutrition(300, 10, 40, 8),
//       ),
//       new Ingredient(
//         5,
//         'Ricotta Cheese',
//         2,
//         'cups',
//         new Nutrition(500, 30, 10, 40),
//       ),
//       new Ingredient(
//         6,
//         'Mozzarella Cheese',
//         2,
//         'cups',
//         new Nutrition(800, 60, 5, 50),
//       ),
//       new Ingredient(
//         7,
//         'Parmesan Cheese',
//         1,
//         'cup',
//         new Nutrition(400, 30, 5, 20),
//       ),
//       new Ingredient(8, 'Eggs', 2, 'units', new Nutrition(140, 10, 1, 13)),
//       new Ingredient(9, 'Onion', 1, 'medium', new Nutrition(50, 0, 12, 1)),
//       new Ingredient(10, 'Garlic', 3, 'cloves', new Nutrition(15, 0, 3, 1)),
//       // Add more ingredients as needed
//     ],
//     [
//       'Preheat oven to 375 degrees F (190 degrees C).',
//       'Cook lasagna noodles according to package instructions.',
//       'In a pan, sauté chopped onions and minced garlic until softened.',
//       'Add ground beef and Italian sausage, cook until browned. Drain excess fat.',
//       'Stir in tomato sauce and simmer for 15 minutes.',
//       'In a bowl, mix ricotta cheese, beaten eggs, and Parmesan cheese.',
//       'In a deep baking dish, layer lasagna noodles, meat sauce, ricotta mixture, and mozzarella cheese.',
//       'Repeat the layers until all ingredients are used, finishing with a layer of mozzarella on top.',
//       'Bake in the preheated oven for 30-40 minutes or until the cheese is golden and bubbly.',
//       'Let it rest for 15 minutes before slicing and serving.',
//     ],
//   ),
//   {
//     calories: 700,
//     fat: 40,
//     carbohydrates: 45,
//     protein: 45,
//   },
//   { hours: 1, minutes: 0 },
//   { hours: 0, minutes: 45 },
//   'dinner',
//   'italian',
//   ['pasta', 'meat', 'cheese'],
//   'https://storage.googleapis.com/duckr-b8e76.appspot.com/uDjh7nzoz-64f0e3c1c476d1f0f7d6b035492533d1942105700cb91a8eafcdf6499af5ad0c.jpg',
// );

// export const meals: Meal[] = [
//   chickenTikkaMasala,
//   primeRibCheesesteak,
//   veganCurry,
//   italianMeatballs,
//   wasabiRamen,
//   gourmetLasagna,
// ];
