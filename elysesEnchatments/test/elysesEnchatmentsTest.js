import { getItem, setItem, insertItemAtTop, removeItem, removeItemFromTop, removeItemAtBottom, insertItemAtBottom, checkSizeOfStack } from "../src/elysesEnchatments";

describe("Get item from array", () => {
    test("given a position of 0", () => {
        const cards = [5, 9, 1];
        const position = 0;
        expect(getItem(cards, position)).toBe(5);
    });
    test("given a position of 1", () => {
        const cards = [5, 9, 1];
        const position = 1;
        expect(getItem(cards, position)).toBe(9);
    });
    test("given a position of 2", () => {
        const cards = [5, 9, 1];
        const position = 2;
        expect(getItem(cards, position)).toBe(1);
    });
    test("given a position of 3", () => {
        const cards = [5, 9, 1];
        const position = 3;
        expect(getItem(cards, position)).toBe();
    });
});

describe("Set item in an array", () => {
    test("given a position of 0 and a replacementCard of 8", () => {
        const cards = [5, 9, 1];
        const position = 0;
        const replacement = 8;
        expect(setItem(cards, position, replacement)).toStrictEqual([8, 9, 1]);
    });
    test("given a position of 1 and a replacementCard of 6", () => {
        const cards = [5, 9, 1];
        const position = 1;
        const replacement = 6;
        expect(setItem(cards, position, replacement)).toStrictEqual([5, 6, 1]);
    });
    test("given a position of 2 and a replacementCard of 2", () => {
        const cards = [5, 9, 1];
        const position = 2;
        const replacement = 2;
        expect(setItem(cards, position, replacement)).toStrictEqual([5, 9, 2]);
    });
});

describe("Insert item the end of array", () => {
    test("given a newCard of 7", () => {
        const stack = [2];
        const newCard = 7;
        expect(insertItemAtTop(stack, newCard)).toStrictEqual([2, 7]);
    });
    test("given a newCard of 3", () => {
        const stack = [2, 0];
        const newCard = 3;
        expect(insertItemAtTop(stack, newCard)).toStrictEqual([2, 0, 3]);
    });
    test("given a newCard of 2", () => {
        const stack = [2, 2, 3];
        const newCard = 2;
        expect(insertItemAtTop(stack, newCard)).toStrictEqual([2, 2, 3, 2]);
    });
    test("given a newCard of 3 and 8", () => {
        const stack = [7];
        insertItemAtTop(stack, 3);
        const newCard = 8;
        expect(insertItemAtTop(stack, newCard)).toStrictEqual([7, 3, 8]);
    });
});

describe("Remove a card from a given position", () => {
    test("given a position of 0", () => {
        const stack = [5, 7, 8, 6];
        const position = 0;
        expect(removeItem(stack, position)).toStrictEqual([7, 8, 6]);
    });
    test("given a position of 1", () => {
        const stack = [5, 7, 8, 6];
        const position = 1;
        expect(removeItem(stack, position)).toStrictEqual([5, 8, 6]);
    });
    test("given a position of 3", () => {
        const stack = [5, 7, 8, 6];
        const position = 3;
        expect(removeItem(stack, position)).toStrictEqual([5, 7, 8]);
    });
    test("given a position of 1 and 1", () => {
        const stack = [5, 7, 8, 6];
        removeItem(stack, 1);
        const position = 1;
        expect(removeItem(stack, position)).toStrictEqual([5, 6]);
    });
    test("given a position of 4", () => {
        const stack = [5, 7, 8, 6];
        const position = 4;
        expect(removeItem(stack, position)).toStrictEqual([5,7,8,6]);
    });
});

describe("Remove item from the end of the array", () => {
    test("given a stack of length 1", () => {
        const stack = [5];
        expect(removeItemFromTop(stack)).toStrictEqual([]);
    });
    test("given a stack of length 3", () => {
        const stack = [5, 7, 8];
        expect(removeItemFromTop(stack)).toStrictEqual([5, 7]);
    });
    test("remove 2 cards", () => {
        const stack = [1, 2, 3, 4];
        removeItemFromTop(stack);
        expect(removeItemFromTop(stack)).toStrictEqual([1, 2]);
    });
});

describe("Remove item from the top of the array", () => {
    test("given a stack of length 1", () => {
        const stack = [5];
        expect(removeItemAtBottom(stack)).toStrictEqual([]);
    });
    test("given a stack of length 3", () => {
        const stack = [5, 7, 8];
        expect(removeItemAtBottom(stack)).toStrictEqual([7, 8]);
    });
    test("remove 2 cards", () => {
        const stack = [1, 2, 3, 4];
        removeItemAtBottom(stack);
        expect(removeItemAtBottom(stack)).toStrictEqual([3, 4]);
    });
});

describe("Insert item at the end of array", () => {
    test("given a newCard of 7", () => {
        const stack = [2];
        const newCard = 7;
        expect(insertItemAtBottom(stack, newCard)).toStrictEqual([7, 2]);
    });
    test("given a newCard of 3", () => {
        const stack = [2, 0];
        const newCard = 3;
        expect(insertItemAtBottom(stack, newCard)).toStrictEqual([3, 2, 0]);
    });
    test("given a newCard of 2", () => {
        const stack = [2, 2, 3];
        const newCard = 2;
        expect(insertItemAtBottom(stack, newCard)).toStrictEqual([2, 2, 2, 3]);
    });
    test("given a newCard of 3 and 8", () => {
        const stack = [7];
        insertItemAtBottom(stack, 3);
        const newCard = 8;
        expect(insertItemAtBottom(stack, newCard)).toStrictEqual([8, 3, 7]);
    });
});

describe("check stack size", () => {
    test("given a stack size of 0", () => {
        const stack = [];
        expect(checkSizeOfStack(stack, 0)).toBe(true);
        expect(checkSizeOfStack(stack, 5)).toBe(false);
    });
    test("given a stack size of 5", () => {
        const stack = [2,4,6,8,10];
        expect(checkSizeOfStack(stack, 3)).toBe(false);
        expect(checkSizeOfStack(stack, 5)).toBe(true);
        expect(checkSizeOfStack(stack, 7)).toBe(false);
    });
    test("given a stack size of 1", () => {
        const stack = [7];
        expect(checkSizeOfStack(stack, 3)).toBe(false);
        expect(checkSizeOfStack(stack, 5)).toBe(false);
        expect(checkSizeOfStack(stack, 7)).toBe(false);
        expect(checkSizeOfStack(stack, 1)).toBe(true);
    });
});



