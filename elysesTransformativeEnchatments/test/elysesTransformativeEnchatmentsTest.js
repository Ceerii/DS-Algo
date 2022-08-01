import { middleTwo, perfectlyOrdered, reorder, sandwichTrick, seeingDouble, threeOfEachThree, twoIsSpecial } from "../src/elysesTransformativeEnchatments";

describe("Double every single card", () => {
    test("doubles all value", () => {
        const stack1 = [2, 4];
        const stack2 = [4, 8];
        expect(seeingDouble(stack1)).toEqual(stack2);
    });
    test("works for a large deck", () => {
        const stack1 = [9, 12, 17, 11, 2, 5, 3, 1, 6, 4, 4, 7, 0];
        const stack2 = [18, 24, 34, 22, 4, 10, 6, 2, 12, 8, 8, 14, 0];
        expect(seeingDouble(stack1)).toEqual(stack2);
    });
    test("work for a small deck", () => {
        const stack1 = [3];
        const stack2 = [6];
        expect(seeingDouble(stack1)).toEqual(stack2);
    });
    test("can handle an empty deck", () => {
        expect(seeingDouble([])).toEqual([]);
    });
    test("does not modify the original deck", () => {
        const deck = [1, 2, 3, 4];
        seeingDouble(deck);
        expect(deck).toEqual([1, 2, 3, 4]);
    });
});

describe("Create multiple copies of every 3 found in the deck", () => {
    test("one 3 is converted into three 3s", () => {
        const stack1 = [3];
        const stack2 = [3, 3, 3];
        expect(threeOfEachThree(stack1)).toEqual(stack2);
    });
    test("also converts multiple 3s", () => {
        const stack1 = [2, 5, 3, 1, 6, 4, 4, 7, 3];
        const stack2 = [2, 5, 3, 3, 3, 1, 6, 4, 4, 7, 3, 3, 3];
        expect(threeOfEachThree(stack1)).toEqual(stack2);
    });
    test("returns the same elements if there are no 3s", () => {
        const stack = [1, 5, 9, 6];
        expect(threeOfEachThree(stack)).toEqual(stack);
    });
    test("can handle an empty deck", () => {
        expect(threeOfEachThree([])).toEqual([]);
    });
});

describe("Find two cards from the exact middle of the deck", () => {
    test("extracts the middle two cards", () => {
        const stack1 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
        const stack2 = [8, 10];
        expect(middleTwo(stack1)).toEqual(stack2);
    });
    test("works with an unordered deck", () => {
        const stack1 = [2, 5, 3, 1, 6, 4, 4, 7, 8, 1];
        const stack2 = [6, 4];
        expect(middleTwo(stack1)).toEqual(stack2);
    });
});

describe("The outside two cards will reappear in the middle of the deck", () => {
    test("moves the outside two cards into the middle", () => {
        const stack1 = [2, 4, 6, 8, 10, 2];
        const stack2 = [4, 6, 2, 2, 8, 10];
        expect(sandwichTrick(stack1)).toEqual(stack2);
    });
    test("switches the order of the moved cards", () => {
        const stack1 = [2, 5, 3, 1, 6, 4, 4, 7];
        const stack2 = [5, 3, 1, 7, 2, 6, 4, 4];
        expect(sandwichTrick(stack1)).toEqual(stack2);
    });
    test("can handle a small deck", () => {
        const stack1 = [6, 1];
        const stack2 = [1, 6];
        expect(sandwichTrick(stack1)).toEqual(stack2);
    });
    test("can handle a large deck", () => {
        const stack1 = [2, 5, 3, 1, 6, 4, 4, 7, 8, 9, 0, 1, 5, 9, 12, 6];
        const stack2 = [5, 3, 1,6, 4, 4, 7, 6, 2, 8, 9, 0, 1, 5, 9, 12];
        expect(sandwichTrick(stack1)).toEqual(stack2);
    });
});

describe("Every card that isn't 2 disappears", () => {
    test("keeps only the 2s", () => {
        const stack1 = [2, 4, 6, 8, 2, 12];
        const stack2 = [2, 2];
        expect(twoIsSpecial(stack1)).toEqual(stack2);
    });
    test("returns an empty deck if there are no 2s", () => {
        const stack1 = [ 5, 3, 1, 6, 4, 4, 7];
        const stack2 = [];
        expect(twoIsSpecial(stack1)).toEqual(stack2);
    });
    test("can handle an empty deck", () => {
        expect(twoIsSpecial([])).toEqual([]);
    });
});

describe("Convert a shuffled deck into a perfectly ordered deck", () => {
    test("sorts the cards lowest to highest", () => {
        const stack1 = [2, 8, 6, 12, 2, 4];
        const stack2 = [2, 2, 4, 6, 8, 12];
        expect(perfectlyOrdered(stack1)).toEqual(stack2);
    });
    test("can handle duplicated numbers", () => {
        const stack1 = [ 5, 5, 1, 6, 4, 4, 7];
        const stack2 = [1, 4, 4, 5, 5, 6, 7];
        expect(perfectlyOrdered(stack1)).toEqual(stack2);
    });
    test("works for a large deck", () => {
        const stack1 = [2, 5, 3, 1, 6, 4, 4, 7, 8, 9, 0, 1, 5, 9, 12, 6];
        const stack2 = [0, 1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 9, 12];
        expect(perfectlyOrdered(stack1)).toEqual(stack2);
    });
    test("can handle an empty deck", () => {
        expect(perfectlyOrdered([])).toEqual([]);
    });
});


describe("Reorder the deck", () => {
    test("reorders the deck", () => {
        const stack1 = [2, 8, 6, 12, 2, 4];
        const stack2 = [4, 2, 12, 6, 8, 2];
        expect(reorder(stack1)).toEqual(stack2);
    });
    test("works for a large deck", () => {
        const stack1 = [2, 5, 3, 1, 6, 4, 4, 7, 8, 9, 0, 1, 5, 9, 12, 6];
        const stack2 = [6, 12, 9, 5, 1, 0, 9, 8, 7, 4, 4, 6, 1, 3, 5, 2];
        expect(reorder(stack1)).toEqual(stack2);
    });
    test("modifies the original deck", () => {
        const stack1 = [2, 1, 6, 9, 3, 5];
        const stack2 = [5, 3, 9, 6, 1, 2];
        reorder(stack1);
        expect(stack1).toEqual(stack2);
    });
    test("can handle an empty deck", () => {
        expect(reorder([])).toEqual([]);
    });
});

