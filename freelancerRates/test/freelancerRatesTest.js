import { dayRate, daysInBudget, priceWithMonthlyDiscount } from "../src/freelancerRates";

describe("Calculate day rate with a constant of 8 hours worked a day", () => {
    test("given a ratePerHour of 25", () => {
        const ratePerHour = 25;
        expect(dayRate(ratePerHour)).toBe(200);
    });
    test("given a ratePerHour of 31.956", () => {
        const ratePerHour = 31.956;
        expect(dayRate(ratePerHour)).toBeCloseTo(255.648, 5);
    });
    test("given a ratePerHour of 47.97", () => {
        const ratePerHour = 47.97;
        expect(dayRate(ratePerHour)).toBeCloseTo(383.76, 5);
    });
});

describe("Calculate the number of workdays given a fixed budget", () => {
    test("given a budget of 1955 and ratePerHour of 25", () => {
        const budget = 1955;
        const ratePerHour = 25;
        expect(daysInBudget(budget, ratePerHour)).toBeCloseTo(9, 5);
    });
    test("given a budget of 75100 and ratePerHour of 76", () => {
        const budget = 75100;
        const ratePerHour = 76;
        expect(daysInBudget(budget, ratePerHour)).toBeCloseTo(123, 5);
    });
    test("given a budget of 2000 and ratePerHour of 6", () => {
        const budget = 2000;
        const ratePerHour = 6;
        expect(daysInBudget(budget, ratePerHour)).toBeCloseTo(41, 5);
    });
});

describe("Calculate the discounted rate for large projects", () => {
    test("given a ratePerHour of 27, numofDays 100 and discount of 0.25", () => {
        const ratePerHour = 27;
        const numOfDays = 100;
        const discount = 0.25;
        expect(priceWithMonthlyDiscount(ratePerHour, numOfDays, discount)).toBeCloseTo(16848, 5);
    });

    test("given a ratePerHour of 80, numofDays 250 and discount of 0", () => {
        const ratePerHour = 80;
        const numOfDays = 250;
        const discount = 0;
        expect(priceWithMonthlyDiscount(ratePerHour, numOfDays, discount)).toBeCloseTo(160000, 5);
    });
    test("given a ratePerHour of 12.79, numofDays 120 and discount of 0.11", () => {
        const ratePerHour = 12.79;
        const numOfDays = 120;
        const discount = 0.11;
        expect(priceWithMonthlyDiscount(ratePerHour, numOfDays, discount)).toBeCloseTo(11041, 5);
    });
    test("given a ratePerHour of 37.76192, numofDays 290 and discount of 0.21", () => {
        const ratePerHour = 37.76192;
        const numOfDays = 290;
        const discount = 0.21;
        expect(priceWithMonthlyDiscount(ratePerHour, numOfDays, discount)).toBeCloseTo(69464, 5);
    });
});

