export const getItem = (cards, position) => (
  cards[position]
);

/**
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 * @return {number[]}
 */
export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

/**
 *
 * @param {number[]} cards
 * @param {number} newCard
 * @return {number[]}
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

/**
 *
 * @param {number[]} cards
 * @param {number} position
 * @return {number[]}
 */
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function removeItemFromTop(cards) {
  cards.splice(cards.length - 1, 1);
  return cards;
}

/**
 *
 * @param {number[]} cards
 * @param {number} newCard
 * @return {number[]}
 */
export function insertItemAtBottom(cards, newCard) {
  cards.splice(0, 0, newCard);
  return cards;
}

/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function removeItemAtBottom(cards) {
  cards.splice(0, 1);
  return cards;
}

/**
 *
 * @param {number[]} cards
 * @param {number} stackSize
 * @return {boolean}
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
