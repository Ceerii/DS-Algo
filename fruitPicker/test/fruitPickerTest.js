import { onSuccess, onError, orderFromGrocer, postOrder } from "../src/fruitPicker";
import { order } from "../src/grocer";
import { notify} from "../src/notifier";



describe("Create a callback to be called when the order is successful", () => {
    test("onSuccess should call notify with a success message", () => {
        expect(onSuccess()).toEqual(undefined);
        expect(notify).toHaveBeenCalledTimes(1);
        expect(notify).toHaveBeenCalledWith({ message: 'SUCCESS' });
    });
});

describe("Create a callback to be called when the order fails with an error", () => {
    test("onSuccess should call notify with a success message", () => {
        expect(onError()).toEqual(undefined);
        expect(notify).toHaveBeenCalledTimes(1);
        expect(notify).toHaveBeenCalledWith({ message: 'ERROR' });
    });
});

describe("Create a wrapper to wrap the external api function", () => {
    test("order from grocer passes callback function arguments forward", () => {
         const query = { variety: 'apple', quantity: 10 };
         orderFromGrocer(query, onSuccess, onError);
         expect(order).toHaveBeenCalledTimes(1);
         expect(order).toHaveBeenCalledWith(query, onSuccess, onError);
    });
});

describe("Create a convenient short function", () => {
    test("postOrder composes a request to the grocer using the defined callbacks", () => {
const variety = 'banana';
const quantity = 5;
postOrder(variety, quantity);
expect(order).toHaveBeenCalledTimes(1);
expect(order).toHaveBeenCalledWith(
      { variety, quantity },
      onSuccess,
      onError
    );

    });
});


