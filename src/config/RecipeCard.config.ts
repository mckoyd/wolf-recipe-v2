export const recipeDetails = {
  name: 'Simple Omelette Recipe',
  description:
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  ingredientsList: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
  instructions: [
    {
      boldedText: 'Beat the eggs: ',
      text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      boldedText: 'Heat the pan: ',
      text: 'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      boldedText: 'Cook the omelette: ',
      text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      boldedText: 'Add fillings (optional): ',
      text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      boldedText: 'Fold and serve: ',
      text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      boldedText: 'Enjoy: ',
      text: 'Serve hot, with additional salt and pepper if needed.',
    },
  ],
  nutritionFacts: [
    {
      title: 'Calories',
      value: '277kcal',
    },
    {
      title: 'Carbs',
      value: '0g',
    },
    {
      title: 'Protein',
      value: '20g',
    },
    {
      title: 'Fat',
      value: '22g',
    },
  ],
};

export const nutritionFactsLength = recipeDetails.nutritionFacts.length;
