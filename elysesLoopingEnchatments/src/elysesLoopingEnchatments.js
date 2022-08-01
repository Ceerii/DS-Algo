// @ts-check
/**
 * Determine how many cards of
 * a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @return {number} number of cards of a single
 * type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let checkCardType = 0;
  stack.forEach((item) => {
    if (item === card) {
      checkCardType++;
    }
  });
  return checkCardType;
}
/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check
 * for - odd or even
 * @return {number} number of cards that are either
 * odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let countCards = 0;
  for (const number of stack) {
    if (type === true && (number % 2 == 0)) {
      countCards++;
    } else if (type === false && (number % 2 == 1)) {
      countCards++;
    }
  }
  return countCards;
}
