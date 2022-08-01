import { cardTypeCheck, determineOddEvenCards } from "../src/elysesLoopingEnchatments";

describe("Determine how many cards of a certain type are in the deck", () => {
    test("a single matching card", () => {
        const stack = [9];
        const card = 9;
        expect(cardTypeCheck(stack, card)).toBe(1);
    });
    test("a single matching card among many", () => {
        const stack = [9, 4, 2, 1, 5, 4];
        const card = 5;
        expect(cardTypeCheck(stack, card)).toBe(1);
    });
    test("a single unmatched card", () => {
        const stack = [4];
        const card = 3;
        expect(cardTypeCheck(stack, card)).toBe(0);
    });
    test("multiple matching cards", () => {
        const stack = [5, 5, 5, 5];
        const card = 5;
        expect(cardTypeCheck(stack, card)).toBe(4);
    });
    test("multiple matching cards among many", () => {
        const stack = [1, 2, 1, 5, 7, 9, 6];
        const card = 1;
        expect(cardTypeCheck(stack, card)).toBe(2);
    });
    test("no matching cards", () => {
        const stack = [9, 8, 4, 4, 2, 1];
        const card = 6;
        expect(cardTypeCheck(stack, card)).toBe(0);
    });
});

describe("Determine how many odd or even cards there are", () => {
    const typeIsOdd = false;
    const typeIsEven = true;
    test("a single odd card", () => {
        const stack = [9];
        expect(determineOddEvenCards(stack, typeIsOdd)).toBe(1);
        expect(determineOddEvenCards(stack, typeIsEven)).toBe(0);
    });
    test("a single even card", () => {
        const stack = [8];
        expect(determineOddEvenCards(stack, typeIsOdd)).toBe(0);
        expect(determineOddEvenCards(stack, typeIsEven)).toBe(1);
    });
    test("multiple odd cards", () => {
        const stack = [1, 3, 5, 7, 9];
        expect(determineOddEvenCards(stack, typeIsOdd)).toBe(5);
        expect(determineOddEvenCards(stack, typeIsEven)).toBe(0);
    });
    test("multiple even cards", () => {
        const stack = [2, 4, 6];
        expect(determineOddEvenCards(stack, typeIsOdd)).toBe(0);
        expect(determineOddEvenCards(stack, typeIsEven)).toBe(3);
    });
    test("a mix of odd and even cards", () => {
        const stack = [1, 2, 1, 5, 7, 9, 6];
        expect(determineOddEvenCards(stack, typeIsOdd)).toBe(5);
        expect(determineOddEvenCards(stack, typeIsEven)).toBe(2);
    });
});
