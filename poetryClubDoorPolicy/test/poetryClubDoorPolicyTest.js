import {  frontDoorResponse, frontDoorPassword, backDoorResponse, backDoorPassword } from "../src/poetryClubDoorPolicy";

describe("Get the first letter of a sentence or word", () => {
    test("if the string is My name is John Doe", () => {
      expect(frontDoorResponse("My name is John Doe")).toStrictEqual('M');
    });
    test("if the string is Javascript", () => {
        expect(frontDoorResponse("Javascript")).toStrictEqual('J');
    });
    test("if the string is happy", () => {
        expect(frontDoorResponse("happy")).toStrictEqual('h');
    });
});

describe("Get the first letter of a sentence or word and change it to Uppercase and the other letters lowercase", () => {
    test("if the string is JOHN", () => {
      expect(frontDoorPassword("JOHN")).toStrictEqual('John');
    });
    test("if the string is COMPARTMENTALIZATION", () => {
        expect(frontDoorPassword("COMPARTMENTALIZATION")).toStrictEqual('Compartmentalization');
    });
    test("if the string is PETER_PAUL", () => {
        expect(frontDoorPassword("PETER_PAUL")).toStrictEqual('Peter_paul');
    });
    test("if the string is java", () => {
        expect(frontDoorPassword("java")).toStrictEqual('Java');
    });
});

describe("Get the last letter of a sentence or word", () => {
    test("if the string is My name is John Doe", () => {
      expect(backDoorResponse("My name is John Doe")).toStrictEqual('e');
    });
    test("if the string is Javascript", () => {
        expect(backDoorResponse("JAVASCRIPT")).toStrictEqual('T');
    });
    test("if the string is happy", () => {
        expect(backDoorResponse("happy")).toStrictEqual('y');
    });
});

describe("Add please after the word or sentence", () => {
    test("if the string is My name is John Doe", () => {
      expect(backDoorPassword("My name is John Doe")).toStrictEqual('My name is john doe, please');
    });
    test("if the string is Javascript", () => {
        expect(backDoorPassword("JAVASCRIPT")).toStrictEqual('Javascript, please');
    });
    test("if the string is happy", () => {
        expect(backDoorPassword("happy")).toStrictEqual('Happy, please');
    });
});

