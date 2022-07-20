/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstNumber = '';
  let secondNumber = '';
  array1.map((item) => {
    firstNumber += item.toString();
  });
  array2.map((item) => {
    secondNumber += item.toString();
  });
  const addedNumber = Number(firstNumber) + Number(secondNumber);
  return addedNumber;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @return {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const checkIfPalindrome =
  value.toString().split('').reverse().join('') === value.toString();
  return checkIfPalindrome;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @return {string} error message
 */
export function errorMessage(input) {
  let message = '';
  if (input === '' || input === undefined || input === null) {
    message = 'Required field';
  } else if (!Number(input)) {
    message = 'Must be a number besides 0';
  }
  return message;
}
