/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @return {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  const index = stack.findIndex((item) => item === card);
  return index;
}
/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @return {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  const doesCardExist = stack.includes(card);
  return doesCardExist;
}
/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @return {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  const isEven = stack.every((num) => num % 2 === 0);
  return isEven;
}
/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @return {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  const includeOdd = stack.some((num) => num % 2 !== 0);
  return includeOdd;
}
/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @return {number} the first odd value
 */
export function getFirstOddCard(stack) {
  const findOdd = stack.find((num) => num % 2 !== 0);
  return findOdd;
}
/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @return {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  const findEvenPosition = stack.findIndex((num) => num % 2 === 0);
  return findEvenPosition;
}
