/**
 *
 *
 * @param {number} remainingTime
 * @return {string} showing cooking status
 */
export function cookingStatus(remainingTime) {
  let message = 'You forgot to set the timer.';
  if (remainingTime === 0) {
    message = 'Lasagna is done.';
  } else if (remainingTime > 0) {
    message = 'Not done, please wait.';
  }
  return message;
}
/**
 *
 *
 * @param {string[]} layers
 * @param {number} average preparation time per layer in minutes
 * @return {number} total preparation time
 */
export function preparationTime(layers, average) {
  let totalPreparationTime;
  if (average === undefined) {
    totalPreparationTime = layers.length * 2;
  } else {
    totalPreparationTime = layers.length * average;
  }
  return totalPreparationTime;
}
/**
 *
 *
 * @param {string[]} layers
 * @return {object} food item quantities
 */
export function quantities(layers) {
  const noodlesArray = layers.filter((item) => item === 'noodles');
  const sauceArray = layers.filter((item) => item === 'sauce');
  const noodlesLayer = Math.round((noodlesArray.length * 50) * 10) / 10;
  const sauceLayer = Math.round((sauceArray.length * 0.2) * 10) / 10;
  const quantitiesObject = {noodles: noodlesLayer, sauce: sauceLayer};
  return quantitiesObject;
}
/**
 *
 *
 * @param {string[]} friendList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendList, myList) {
  const lastIngredientInFirstList = friendList[friendList.length - 1];
  myList.push(lastIngredientInFirstList);
}
/**
 *
 *
 * @param {object} recipeObject
 * @param {number} numberOfPortions
 * @return {object} updated Object
 */
export function scaleRecipe(recipeObject, numberOfPortions) {
  const recipe = {...recipeObject};
  for (const key in recipe) {
    if (recipe) {
      recipe[key] = Math.round(Number(`${(recipe[key] / 2) *
      numberOfPortions}`) * 100) / 100;
    }
  }
  return recipe;
}
