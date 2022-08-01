import { buildBirthdaySign, buildSign, graduationFor, costOf } from "../src/customSigns";

describe("Build an occasion sign", () => {
    test("occasion is Birthday", () => {
        const occasion = 'Birthday';
        const name = 'Emily';
        const message = 'Happy Birthday Emily!';
        expect(buildSign(occasion, name)).toBe(message);
    });
    test("occasion is Anniversary", () => {
        const occasion = 'Anniversary';
        const name = 'Toby';
        const message = 'Happy Anniversary Toby!';
        expect(buildSign(occasion, name)).toBe(message);
    });
});

describe("Build a birthday sign", () => {
    test("age is less than 50", () => {
        const message = 'Happy Birthday! What a young fellow you are.';
        expect(buildBirthdaySign(49)).toBe(message);
    });
    test("age is 50 or older", () => {
        const message = 'Happy Birthday! What a mature fellow you are.';
        expect(buildBirthdaySign(51)).toBe(message);
    });
    test("age is 50", () => {
        const message = 'Happy Birthday! What a mature fellow you are.';
        expect(buildBirthdaySign(50)).toBe(message);
    });
});

describe("Build a graduation sign", () => {
    test("Robs graduation, 2018", () => {
        const message = 'Congratulations Rob!\nClass of 2018';
        expect(graduationFor('Rob', 2018)).toBe(message);
    });
    test("Amys graduation, 1998", () => {
        const message = 'Congratulations Amy!\nClass of 1998';
        expect(graduationFor('Amy', 1998)).toBe(message);
    });
});

describe("Compute the cost of a sign", () => {
    test("sign is total of characters followed by the currency", () => {
        const sign = 'Happy Birthday!';
        const message = 'Your sign costs 50.00 dollars.';
        expect(costOf(sign, 'dollars')).toBe(message);
    });
    test("includes line breaks in the calculation", () => {
        const sign = 'Congratulations Rob\nClass of 2021';
        const message = 'Your sign costs 86.00 dollars.';
        expect(costOf(sign, 'dollars')).toBe(message);
    });
    test("handles different currency arguments", () => {
        const sign = 'Happy Easter, little sister!';
        const message = 'Your sign costs 76.00 euros.';
        expect(costOf(sign, 'euros')).toBe(message);
    });
});
