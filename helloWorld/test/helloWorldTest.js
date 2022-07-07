import { hello } from "../src/helloWorld";

describe("Hello World", () => {
    test("returns Hello World", () => {
      expect(hello()).toEqual(
        'Hello, World!'
      );
    });
  });