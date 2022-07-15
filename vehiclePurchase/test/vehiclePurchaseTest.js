import { calculateResellPrice, chooseVehicle, needsLicense } from "../src/vehiclePurchase";

describe("Determine if you will need a drivers licence", () => {
    test("if vehicle is a car", () => {
      expect(needsLicense('car')).toBe(true);
    });
    test("if vehicle is a stroller", () => {
        expect(needsLicense('stroller')).toBe(false);
    });
    test("if vehicle is a truck", () => {
        expect(needsLicense('truck')).toBe(true);
    });
    test("if vehicle is a bike", () => {
        expect(needsLicense('bike')).toBe(false);
    });
});

describe("Choose between two potential vehicles to buy", () => {
    test("if two vehicles are Bugatti and Toyota", () => {
      expect(chooseVehicle('Bugatti', 'Toyota')).toBe('Bugatti is clearly the better choice.');
    });
    test("if two vehicles are Maserati and Nissan", () => {
        expect(chooseVehicle('Maserati', 'Nissan')).toBe('Maserati is clearly the better choice.');
    });
    test("if two vehicles are Audi and 2018 Bergamont City", () => {
        expect(chooseVehicle('Audi', '2018 Bergamont City')).toBe('2018 Bergamont City is clearly the better choice.');
    });
    test("if two vehicles are Bugatti and BMW", () => {
        expect(chooseVehicle('Bugatti', 'BMW')).toBe('BMW is clearly the better choice.');
    });
});

describe("Calculate an estimation for the price of a used vehicle", () => {
    test("if original price is 30000 and age is 1", () => {
        const originalPrice = 30000;
        const age = 1;
      expect(calculateResellPrice(originalPrice, age)).toBe(24000);
    });

    test("if original price is 20000 and age is 1.5", () => {
        const originalPrice = 20000;
        const age = 1.5;
      expect(calculateResellPrice(originalPrice, age)).toBe(16000);
    });

    test("if original price is 25000 and age is 17", () => {
        const originalPrice = 25000;
        const age = 17;
      expect(calculateResellPrice(originalPrice, age)).toBe(12500);
    });

    test("if original price is 15000 and age is 32", () => {
        const originalPrice = 15000;
        const age = 32;
      expect(calculateResellPrice(originalPrice, age)).toBe(7500);
    });
    test("if original price is 10000 and age is 7", () => {
        const originalPrice = 10000;
        const age = 7;
      expect(calculateResellPrice(originalPrice, age)).toBe(7000);
    });

    test("if original price is 12000 and age is 4", () => {
        const originalPrice = 12000;
        const age = 4;
      expect(calculateResellPrice(originalPrice, age)).toBe(8400);
    });
    test("if original price is 50000 and age is 3", () => {
        const originalPrice = 50000;
        const age = 3;
      expect(calculateResellPrice(originalPrice, age)).toBe(35000);
    });
    test("if original price is 60000 and age is 10", () => {
        const originalPrice = 60000;
        const age = 10;
      expect(calculateResellPrice(originalPrice, age)).toBe(42000);
    });
    
});
