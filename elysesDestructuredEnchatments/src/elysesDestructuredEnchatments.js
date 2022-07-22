/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @return {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  return deck[0];
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 * @return {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  return deck[1];
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 * @return {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  [deck[1], deck[0]] = [deck[0], deck[1]];
  return deck;
}
/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 * @return {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  const filteredDeck = deck.filter((item, index) => index !== 0);
  const newArray = [deck[0], filteredDeck];
  return newArray;
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];
/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 * @return {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  if (deck.length > 0) {
    deck.splice(1, 0, FACE_CARDS[0], FACE_CARDS[1], FACE_CARDS[2]);
  } else {
    deck.splice(1, 0, undefined, FACE_CARDS[0], FACE_CARDS[1], FACE_CARDS[2]);
  }
  return deck;
}
