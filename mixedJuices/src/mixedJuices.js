/**
 *
 *
 * @param {string} name
 * @return {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time;
  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
      time = 1.5;
      break;
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
  }
  return time;
}
/**
 *
 *
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @return {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  let i = 0;
  while (count < wedgesNeeded && i < limes.length) {
    const size = limes[i];
    switch (size) {
      case 'small':
        count += 6;
        break;
      case 'medium':
        count += 8;
        break;
      case 'large':
        count += 10;
        break;
    }
    i++;
  }
  return i;
}
/**
 *
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @return {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  let count = 0;
  let singleOrder = '';
  do {
    if (count < timeLeft && i < orders.length) {
      singleOrder = orders[i];
      count += timeToMixJuice(singleOrder);
      i++;
    }
  } while (count < timeLeft && i < orders.length);
  const singleOrderIndex = orders.indexOf(singleOrder);
  orders.splice(singleOrderIndex - singleOrderIndex, i);
  return orders;
}
