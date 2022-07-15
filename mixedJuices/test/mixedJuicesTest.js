import { limesToCut, remainingOrders, timeToMixJuice } from "../src/mixedJuices";

describe("Determine how long it takes to mix a juice", () => {
    test("returns the correct time for 'Pure Strawberry Joy'", () => {
        expect(timeToMixJuice('Pure Strawberry Joy')).toEqual(0.5);
    });
    test("returns the correct time for 'Kunnu'", () => {
        expect(timeToMixJuice('Kunnu')).toEqual(2.5);
    });
    test("returns the correct time for 'Energizer'", () => {
        expect(timeToMixJuice('Energizer')).toEqual(1.5);
    });
    test("returns the correct time for 'Green Garden'", () => {
        expect(timeToMixJuice('Green Garden')).toEqual(1.5);
    });
    test("returns the correct time for 'Tropical Island'", () => {
        expect(timeToMixJuice('Tropical Island')).toEqual(3);
    });
    test("returns the correct time for 'All or Nothing'", () => {
        expect(timeToMixJuice('All or Nothing')).toEqual(5);
    });
    test("returns the correct time for 'Zobo'", () => {
        expect(timeToMixJuice('Zobo')).toEqual(2.5);
    });
});

describe("Determine how long it takes to mix a juice", () => {
    test("calculates the number of limes needed to reach the target supply  (38 wedges needed)", () => {
        const wedgesNeeded = 38;
        const limes = ['large', 'large', 'medium', 'medium', 'large', 'small', 'small', 'large', 'medium', 'small'];
        expect(limesToCut(wedgesNeeded, limes)).toBe(5);
    });
    test("uses up all limes if there are not enough to reach the target (90 wedges needed)", () => {
        const wedgesNeeded = 90;
        const limes = ["large", "large", "medium", "small"];
        expect(limesToCut(wedgesNeeded, limes)).toBe(4);
    });
    test("if no new wedges are needed (0 wedges needed), no limes are cut", () => {
        const wedgesNeeded = 0;
        const limes = ['medium','medium','medium','small'];
        expect(limesToCut(wedgesNeeded, limes)).toBe(0);
    });
    test("works if no limes are available and wedges needed are 25", () => {
        const wedgesNeeded = 25;
        const limes = [];
        expect(limesToCut(wedgesNeeded, limes)).toBe(0);
    });
});

describe("Finish up the shift", () => {
    test("correctly determines the remaining orders if there are 5 minutes left", () => {
        const timeLeft = 5;
        const orders =  ['Zobo','Kunnu','All or Nothing','Green Garden'];
        expect(remainingOrders(timeLeft, orders )).toEqual(['All or Nothing','Green Garden']);
    });
    test("correctly handles orders that were started because there was time left", () => {
        const timeLeft = 17;
        const orders = ['Tropical Island','All or Nothing','All or Nothing','Tropical Island','All or Nothing','Zobo','Vitality','Green Garden','Limetime'];
        expect(remainingOrders(timeLeft, orders)).toEqual(['Zobo','Vitality','Green Garden','Limetime']);
    });
    test("counts all orders as fulfilled if there is enough time", () => {
        const timeLeft = 10;
        const orders = ['Zobo', 'Vitality', 'Pure Strawberry Joy', 'Green Garden', 'Limetime', 'Pure Strawberry Joy'];
        expect(remainingOrders(timeLeft, orders)).toEqual([]);
    });
    test("works if there is only very little time left", () => {
        const timeLeft = 0.2;
        const orders = ['Vitality', 'Green Garden', 'Limetime', 'Pure Strawberry Joy'];
        expect(remainingOrders(timeLeft, orders)).toEqual(['Green Garden', 'Limetime', 'Pure Strawberry Joy']);
    });
});
