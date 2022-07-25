import {notify} from './notifier';
import {order} from './grocer';
/**
 * @return {string}
 */
export function onSuccess() {
  return notify({message: 'SUCCESS'});
}
/**
 * @return {string}
 */
export function onError() {
  return notify({message: 'ERROR'});
}
/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 *
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}
/**
 * @param {string} variety
 * @param {number} quantity
 *
 */
export function postOrder(variety, quantity) {
  orderFromGrocer({variety, quantity}, onSuccess, onError);
}
