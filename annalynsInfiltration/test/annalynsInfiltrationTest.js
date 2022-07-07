import { canExecuteFastAttack, canSpy, canSignalPrisoner, canFreePrisoner } from "../src/annalynsInfiltration";

describe("Can execute Fast Attack", () => {
    test("checks if an attack can be executed when the Knight is awake", () => {
        const knightIsAwake = true;
        expect(canExecuteFastAttack(knightIsAwake)).toEqual(false);
    });
    test("checks if an attack can be executed when the Knight is asleep", () => {
        const knightIsAwake = false;
        expect(canExecuteFastAttack(knightIsAwake)).toEqual(true);
    });
});

describe("Can Spy", () => {
    test("checks if can spy when everyone is asleep", () => {
        const knightIsAwake = false;
        const archerIsAwake = false;
        const prisonerIsAwake = false;
        expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toEqual(false);
    });
    test("checks if can spy when only the prisoner is awake", () => {
        const knightIsAwake = false;
        const archerIsAwake = false;
        const prisonerIsAwake = true;
        expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toEqual(true);
    });
    test("checks if can spy when only the archer is awake", () => {
        const knightIsAwake = false;
        const archerIsAwake = true;
        const prisonerIsAwake = false;
        expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toEqual(true);
    });
    test("checks if can spy when only the knight is asleep", () => {
        const knightIsAwake = false;
        const archerIsAwake = true;
        const prisonerIsAwake = true;
        expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toEqual(true);
    });
    test("checks if can spy when only the knight is awake", () => {
        const knightIsAwake = true;
        const archerIsAwake = false;
        const prisonerIsAwake = false;
        expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toEqual(true);
    });
    test("checks if can spy when only the archer is asleep", () => {
        const knightIsAwake = true;
        const archerIsAwake = false;
        const prisonerIsAwake = true;
        expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toEqual(true);
    });
    test("checks if can spy when everyone is awake", () => {
        const knightIsAwake = true;
        const archerIsAwake = true;
        const prisonerIsAwake = true;
        expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toEqual(true);
    });
});

describe("Can Signal Prisoner", () => {
    test("checks if can signal when everyone is asleep", () => {
        const archerIsAwake = false;
        const prisonerIsAwake = false;
        expect(canSignalPrisoner(archerIsAwake, prisonerIsAwake)).toEqual(false);
    });
    test("checks if can signal when only the prisoner is awake", () => {
        const archerIsAwake = false;
        const prisonerIsAwake = true;
        expect(canSignalPrisoner(archerIsAwake, prisonerIsAwake)).toEqual(true);
    });
    test("checks if can signal when only the archer is awake", () => {
        const archerIsAwake = true;
        const prisonerIsAwake = false;
        expect(canSignalPrisoner(archerIsAwake, prisonerIsAwake)).toEqual(false);
    });
    test("checks if can signal when everyone is awake", () => {
        const archerIsAwake = true;
        const prisonerIsAwake = true;
        expect(canSignalPrisoner(archerIsAwake, prisonerIsAwake)).toEqual(false);
    });
});

describe("Can Free Prisoner", () => {
    test("when everyone is not awake and pet dog is not present", () => {
        const knightIsAwake = false;
        const archerIsAwake = false;
        const prisonerIsAwake = false;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when everyone is not awake and pet dog is present", () => {
        const knightIsAwake = false;
        const archerIsAwake = false;
        const prisonerIsAwake = false;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(true);
    });
    test("when only prisoner is awake and pet dog is not present", () => {
        const knightIsAwake = false;
        const archerIsAwake = false;
        const prisonerIsAwake = true;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(true);
    });
    test("when only prisoner is awake and pet dog is present", () => {
        const knightIsAwake = false;
        const archerIsAwake = false;
        const prisonerIsAwake = true;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(true);
    });
    test("when only archer is awake and pet dog is not present", () => {
        const knightIsAwake = false;
        const archerIsAwake = true;
        const prisonerIsAwake = false;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when only archer is awake and pet dog is present", () => {
        const knightIsAwake = false;
        const archerIsAwake = true;
        const prisonerIsAwake = false;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when only knight is not awake and pet dog is not present", () => {
        const knightIsAwake = false;
        const archerIsAwake = true;
        const prisonerIsAwake = true;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when only knight is not awake and pet dog is present", () => {
        const knightIsAwake = false;
        const archerIsAwake = true;
        const prisonerIsAwake = true;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when only knight is awake and pet dog is not present", () => {
        const knightIsAwake = true;
        const archerIsAwake = false;
        const prisonerIsAwake = false;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when only knight is awake and pet dog is present", () => {
        const knightIsAwake = true;
        const archerIsAwake = false;
        const prisonerIsAwake = false;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(true);
    });
    test("when only archer is not awake and pet dog is not present", () => {
        const knightIsAwake = true;
        const archerIsAwake = false;
        const prisonerIsAwake = true;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when only archer is not awake and pet dog is present", () => {
        const knightIsAwake = true;
        const archerIsAwake = false;
        const prisonerIsAwake = true;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(true);
    });
    test("when only prisoner is not awake and pet dog is not present", () => {
        const knightIsAwake = true;
        const archerIsAwake = true;
        const prisonerIsAwake = false;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when only prisoner is not awake and pet dog is present", () => {
        const knightIsAwake = true;
        const archerIsAwake = true;
        const prisonerIsAwake = false;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when everyone is awake and pet dog is not present", () => {
        const knightIsAwake = true;
        const archerIsAwake = true;
        const prisonerIsAwake = true;
        const petDogIsPresent = false;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
    test("when everyone is  awake and pet dog is present", () => {
        const knightIsAwake = true;
        const archerIsAwake = true;
        const prisonerIsAwake = true;
        const petDogIsPresent = true;
        expect(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)).toEqual(false);
    });
});