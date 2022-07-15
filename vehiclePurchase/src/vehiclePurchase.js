/**
 *
 *
 * @param {string} kind
 * @return {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if (kind === 'car' || kind === 'truck') {
    return true;
  } else {
    return false;
  }
}
/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @return {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return `${option1} is clearly the better choice.`;
  } else {
    return `${option2} is clearly the better choice.`;
  }
}
/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @return {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return (originalPrice * 80) / 100;
  } else if (age >= 3 && age <= 10) {
    return (originalPrice * 70) / 100;
  } else {
    return (originalPrice * 50) / 100;
  }
}
