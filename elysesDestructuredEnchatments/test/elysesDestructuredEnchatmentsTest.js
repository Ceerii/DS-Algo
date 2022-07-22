import { discardTopCard, getFirstCard, getSecondCard, swapTopTwoCards, insertFaceCards } from "../src/elysesDestructuredEnchatments";

describe("Get the first card", () => {
    test("from a deck with a single card", () => {
        expect(getFirstCard([3])).toBe(3);
    });
    test("from a deck with many cards", () => {
        expect(getFirstCard([8, 3, 9, 5])).toBe(8);
    });
    test("from an empty deck", () => {
        expect(getFirstCard([])).toBe(undefined);
    });
});

describe("Get the second card", () => {
    test("from a deck with two cards", () => {
        expect(getSecondCard([3, 7])).toBe(7);
    });
    test("from a deck with many cards", () => {
        expect(getSecondCard([8, 3, 9, 5])).toBe(3);
    });
    test("from an empty deck", () => {
        expect(getSecondCard([])).toBe(undefined);
    });
    test("from a deck with one card", () => {
        expect(getSecondCard([8])).toBe(undefined);
    });
});

describe("Swap the first two cards", () => {
    test("in a deck with two cards", () => {
        expect(swapTopTwoCards([3, 7])).toStrictEqual([7,3]);
    });
    test("from a deck with many cards", () => {
        expect(swapTopTwoCards([2, 4, 1, 3])).toStrictEqual([4,2,1,3]);
    });
});

describe("Discard the top card", () => {
    test("from a deck with one card", () => {
        expect(discardTopCard([7])).toStrictEqual([7, []]);

    });
    test("from a deck with many cards", () => {
        expect(discardTopCard([9, 2, 10, 4])).toStrictEqual([9, [2, 10, 4]]);
    });
});

describe("Insert face cards", () => {
    test("into a deck with many cards", () => {
        expect(insertFaceCards([3, 10, 7])).toStrictEqual([
            3,
            'jack',
            'queen',
            'king',
            10,
            7,
          ]);      
    });
    test("into a deck with one card", () => {
        expect(insertFaceCards([9])).toStrictEqual([9, 'jack', 'queen', 'king']);
    });
    test("into a deck with no cards", () => {
        expect(insertFaceCards([])).toStrictEqual([
            undefined,
            'jack',
            'queen',
            'king',
          ]);
      
    });
});


