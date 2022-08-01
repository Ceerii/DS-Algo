
/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @return {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const doubledDeck = deck.map((item) => item * 2);
  return doubledDeck;
}
/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @return {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce(
      (array, card) => {
        if (card === 3) {
          array.push(card, card, card);
        } else {
          array.push(card);
        }
        return array;
      }, []
  );
}
/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @return {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck = [deck[4], deck[5]];
}
/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @return {number[]} transformed deck
 */
export function sandwichTrick(deck) {
  const firstNumber = deck[0];
  const lastNumber = deck[deck.length - 1];
  deck.splice(0, 1);
  const firstNumberNewPosition = Math.round(deck.length / 2) - 1;
  deck.splice(firstNumberNewPosition, 0, lastNumber);
  deck.splice(deck.length - 1, 1);
  const lastNumberNewPosition = Math.round(deck.length / 2);
  deck.splice(lastNumberNewPosition, 0, firstNumber);
  return deck;
}
/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @return {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const filteredDeck = deck.filter((item) => item === 2);
  return filteredDeck;
}
/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @return {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  const ordered = deck.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (b > a ) {
      return 1;
    }
    return 0;
  });
  return ordered;
}
/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @return {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
