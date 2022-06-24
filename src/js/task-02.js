const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientListEl = ingredients.map((item) => {
  const ingradient = document.createElement('li');
  ingradient.textContent = item;
  ingradient.classList.add('item');
  return ingradient;
});

ingredientsRef.append(...ingredientListEl);