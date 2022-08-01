import { doesStackIncludeCard, doesStackIncludeOddCard, getCardPosition, getFirstEvenCardPosition, getFirstOddCard, isEachCardEven } from "../src/elysesAnalyticEnchatments";

describe("Find the position of a card", () => {
    test("when it is the first card", () => {
        const stack = [7, 6, 1, 0, 5, 2, 1];
        const card = 5;
        expect(getCardPosition(stack, card)).toBe(4);
    });
    test("when the card is not found", () => {
        const stack = [7, 6, 1, 0, 5, 2, 1];
        const card = 9;
        expect(getCardPosition(stack, card)).toBe(-1);
    });
});

describe("Determine if a card is present", () => {
    test("when there is a card found", () => {
        const stack = [7, 6, 1, 0, 5, 2, 1];
        const card = 5;
        expect(doesStackIncludeCard(stack, card)).toBe(true);
    });
    test("when a card is not found", () => {
        const stack = [7, 6, 1, 0, 5, 2, 1];
        const card = 9;
        expect(doesStackIncludeCard(stack, card)).toBe(false);
    });
});

describe("Determine if each card is even", () => {
    test("when all cards are even", () => {
        const stack = [2 , 4, 6, 8];
        expect(isEachCardEven(stack)).toBe(true);
    });
    test("when any card is odd", () => {
        const stack = [2, 4, 7, 8];
        expect(isEachCardEven(stack)).toBe(false);
    });
});

describe("Check if the stack contains an odd-value card", () => {
    test("should be true if odd number card is found", () => {
        const stack = [2 , 3, 6, 8];
        expect(doesStackIncludeOddCard(stack)).toBe(true);
    });
    test("should be false if no odd number card is found", () => {
        const stack = [2, 4, 6, 8];
        expect(doesStackIncludeOddCard(stack)).toBe(false);
    });
});

describe("Get the first odd card from the stack", () => {
    test("should return the first odd card found", () => {
        const stack = [2 , 3, 6, 8];
        expect(getFirstOddCard(stack)).toBe(3);
    });
    test("should return undefined if odd card is not found", () => {
        const stack = [2, 4, 6, 8];
        expect(getFirstOddCard(stack)).toBeUndefined();
    });
});

describe("Determine the position of the first card that is even", () => {
    test("should return position of first even card", () => {
        const stack = [2 , 3, 6, 8];
        expect(getFirstEvenCardPosition(stack)).toBe(0);
    });
    test("should return -1 when the card is not found", () => {
        const stack = [1, 3, 5, 7];
        expect(getFirstEvenCardPosition(stack)).toBe(-1);
    });
});

