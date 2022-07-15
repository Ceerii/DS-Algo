import { birdsInWeek, fixBirdCountLog, totalBirdCount } from "../src/birdWatcher";

describe("Determine the total number of birds that you counted so far", () => {
    test("calculates the correct total number of birds with an birdsPerDay array of [7,6,1,0,5,2,1]", () => {
        const birdsPerDay = [7,6,1,0,5,2,1];
        expect(totalBirdCount(birdsPerDay)).toBe(22);
    });
    test("calculates the correct total number of birds with a short birdsPerDay array of [7]", () => {
        const birdsPerDay = [7];
        expect(totalBirdCount(birdsPerDay)).toBe(7);
    });
    test("calculates the correct total number of birds with a long birdsPerDay array of [7,6,1,0,5,2,1,2,3,1,4,5,0,6,1,9,5,4,4,0,2]", () => {
        const birdsPerDay = [7,6,1,0,5,2,1,2,3,1,4,5,0,6,1,9,5,4,4,0,2];
        expect(totalBirdCount(birdsPerDay)).toBe(68);
    });
});

describe("Calculate the number of visiting birds in a specific week", () => {
    test("calculates the number of birds in the first week", () => {
        const birdsPerDay = [7,6,1,0,5,2,1,2,3,1,4,5,0,6,1,9,5,4,4,0,2];
        expect(birdsInWeek(birdsPerDay, 1)).toBe(22);
    });
    test("calculates the number of birds in the middle of the log week", () => {
        const birdsPerDay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        expect(birdsInWeek(birdsPerDay, 2)).toBe(77);
    });
    test("calculates the number of birds when there is only one week", () => {
        const birdsPerDay = [2,4,6,8,10,12,14];
        expect(birdsInWeek(birdsPerDay, 1)).toBe(56);
    });
});

describe("Fix a counting mistake", () => {
    test("in a long count list", () => {
        const birdsPerDay = [7,6,1,0,5,2,1,2,3,1,4,5,0,6,1,9,5,4,4,0,2];
        expect(fixBirdCountLog(birdsPerDay)).toEqual([8,6,2,0,6,2,2,2,4,1,5,5,1,6,2,9,6,4,5,0,3]);
    });
    test("in a short count list", () => {
        const birdsPerDay = [0,2];
        expect(fixBirdCountLog(birdsPerDay)).toEqual([1,2]);
    });
    test("in a  count list", () => {
        const birdsPerDay = [0,2,1,1,4,9,8];
        expect(fixBirdCountLog(birdsPerDay)).toEqual([1,2,2,1,5,9,9]);
    });
});
