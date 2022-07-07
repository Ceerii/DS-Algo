import { EXPECTED_MINUTES_IN_OVEN, PREPARATION_MINUTES_PER_LAYER, preparationTimeInMinutes, remainingMinutesInOven, totalTimeInMinutes } from "../src/luciansLusciousLasagna";

describe("Expected Oven Time should be defined as a constant", () => {
    test("checks if const EXPECTED_MINUTES_IN_OVEN is equal to 40", () => {
        expect(EXPECTED_MINUTES_IN_OVEN).toEqual(40);
    });
});

describe("Preparation Minutes Per Layer should be defined as a constant", () => {
    test("checks if const PREPARATION_MINUTES_PER_LAYER is equal to 2", () => {
        expect(PREPARATION_MINUTES_PER_LAYER).toEqual(2);
    });
});

describe("Calculate the remaining oven time in minutes which you get by passing in a parameter actualMinutesInOven", () => {
    test("calculates the difference between actualMinutesInOven = 30 and the EXPECTED_MINUTES_IN_OVEN = 40", () => {
        expect(remainingMinutesInOven(30)).toEqual(10);
    });
    test("calculates the difference between actualMinutesInOven = 20 and the EXPECTED_MINUTES_IN_OVEN = 40", () => {
        expect(remainingMinutesInOven(20)).toEqual(20);
    });
    test("calculates the difference between actualMinutesInOven = 2 and the EXPECTED_MINUTES_IN_OVEN = 40", () => {
        expect(remainingMinutesInOven(2)).toEqual(38);
    });
    test("calculates the difference between actualMinutesInOven = 40 and the EXPECTED_MINUTES_IN_OVEN = 40", () => {
        expect(remainingMinutesInOven(40)).toEqual(0);
    });
    test("calculates the difference between actualMinutesInOven = 0 and the EXPECTED_MINUTES_IN_OVEN = 40", () => {
        expect(remainingMinutesInOven(0)).toEqual(40);
    });
});

describe("Calculate the preparation time in minutes which you get by passing in a parameter numbersOfLayers and multiplying PREPARATION_MINUTES_PER_LAYER", () => {
    test("calculates the multiplication of numberOfLayers = 2 and the  PREPARATION_MINUTES_PER_LAYER", () => {
        expect(preparationTimeInMinutes(2)).toEqual(4);
    });

    test("calculates the multiplication of numberOfLayers = 0 and the  PREPARATION_MINUTES_PER_LAYER", () => {
        expect(preparationTimeInMinutes(0)).toEqual(0);
    });

    test("calculates the multiplication of numberOfLayers = 5 and the  PREPARATION_MINUTES_PER_LAYER", () => {
        expect(preparationTimeInMinutes(5)).toEqual(10);
    });
});


describe("Calculate the total working time in minutes which you get by passing in a parameter numbersOfLayers and actualMinutesInOven", () => {
    test("calculates the totalWorking time when numberOfLayers = 2 and the actualMinutesInOven = 20", () => {
        expect(totalTimeInMinutes(2, 20)).toEqual(24);
    });

    test("calculates the totalWorking time when numberOfLayers = 10 and the actualMinutesInOven = 30", () => {
        expect(totalTimeInMinutes(10, 30)).toEqual(50);
    });

    test("calculates the totalWorking time when numberOfLayers = 3 and the actualMinutesInOven = 15", () => {
        expect(totalTimeInMinutes(3, 15)).toEqual(21);
    });
});