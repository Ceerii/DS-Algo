import { errorMessage, luckyNumber, twoSum } from "../src/luckyNumbers";

describe("Calculate the sum for the numbers on the slot machine", () => {
    test("sums the numbers correctly for short arrays", () => {
        const array1 = [5, 6];
        const array2 = [3, 8, 4];
        expect(twoSum(array1, array2)).toBe(440);
    });
    test("sums the numbers correctly for long arrays", () => {
        const array1 = [2,4,6,8,0,1,3,5,7,9];
        const array2 = [1,2,3,4,5,6,7,8,9,0];
        expect(twoSum(array1, array2)).toBe(3702581469);
    });
});


describe("Determine if a number is a palindrome", () => {
    test("identifies palindromic numbers", () => {
        expect(luckyNumber(24642)).toBe(true);
        expect(luckyNumber(74385658347)).toBe(true);
    });
    test("identifies non-palindromic numbers", () => {
        expect(luckyNumber(74392134347)).toBe(false);
        expect(luckyNumber(4347)).toBe(false);
    });
    test("works for small numbers", () => {
        expect(luckyNumber(1)).toBe(true);
        expect(luckyNumber(44)).toBe(true);
        expect(luckyNumber(12)).toBe(false);
    });
});


describe("Generate an error message for invalid user input", () => {
    test("identifies if there is no input value", () => {
        expect(errorMessage('')).toBe('Required field');
    });
    test("identifies invalid inputs", () => {
        expect(errorMessage('Hi ha')).toBe('Must be a number besides 0');
        expect(errorMessage('0')).toBe('Must be a number besides 0');
        expect(errorMessage('94fbh')).toBe('Must be a number besides 0');
        expect(errorMessage('42')).not.toBe('Must be a number besides 0');

    });
    test("returns an empty string for valid inputs", () => {
        expect(errorMessage('1.234')).toBe('');
        expect(errorMessage('  784   ')).toBe('');
        expect(errorMessage('5e3')).toBe('');
    });
});





