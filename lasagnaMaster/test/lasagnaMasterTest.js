import { addSecretIngredient, cookingStatus, preparationTime, quantities, scaleRecipe } from "../src/lasagnaMaster";

describe("Determine whether the lasagna is done", () => {
    test("recognizes that there is time left on the timer", () => {
        const message = 'Not done, please wait.';
        expect(cookingStatus(1)).toBe(message);
        expect(cookingStatus(14)).toBe(message);
        expect(cookingStatus(3.7)).toBe(message);
    });
    test("recognizes that there is no time left on the timer", () => {
        const message = 'Lasagna is done.';
        expect(cookingStatus(0)).toBe(message);
    });
    test("returns a special status when no timer value was passed", () => {
        const message = 'You forgot to set the timer.';
        expect(cookingStatus()).toBe(message);
        expect(cookingStatus(undefined)).toBe(message);
    });
});

describe("Estimate the preparation time", () => {
    const manyLayers = [
        'sauce',
        'noodles',
        'béchamel',
        'meat',
        'mozzarella',
        'noodles',
        'ricotta',
        'eggplant',
        'béchamel',
        'noodles',
        'sauce',
        'mozzarella',
      ];      
      const fewLayers = ['sauce', 'noodles'];
    test("applies the custom average time per layer", () => {
        expect(preparationTime(manyLayers, 3)).toBe(36);
        expect(preparationTime(fewLayers, 7.5)).toBe(15);
    });
    test("uses the default if no custom time was passed", () => {
        expect(preparationTime(manyLayers)).toBe(24);
        expect(preparationTime(fewLayers)).toBe(4);
    });
    test("works with an empty layers array", () => {
        expect(preparationTime([])).toBe(0);
    });
});

describe("Compute the amounts of noodles and sauce needed", () => {
    const manyLayers = [
        'sauce',
        'noodles',
        'béchamel',
        'meat',
        'mozzarella',
        'noodles',
        'ricotta',
        'eggplant',
        'béchamel',
        'noodles',
        'sauce',
        'mozzarella',
      ];      
      const fewLayers = ['sauce', 'noodles', 'noodles'];
    test("calculates the amounts of noodles and sauce correctly", () => {
        expect(quantities(fewLayers)).toEqual({noodles: 100, sauce: 0.2 });
        expect(quantities(manyLayers)).toEqual({noodles: 150, sauce: 0.4 });
    });
    test("works if there are no noodles or no sauce found in the layers", () => {
        const noNoodles = ['sauce', 'béchamel', 'sauce', 'meat', 'sauce'];
        expect(quantities(noNoodles)).toEqual({ noodles: 0, sauce: 0.6 });
        const noSauce = ['eggplant', 'béchamel', 'noodles', 'béchamel'];
        expect(quantities(noSauce)).toEqual({ noodles: 50, sauce: 0 });
        
    });
    test("works with an empty layers array", () => {
        expect(quantities([])).toEqual({ noodles: 0, sauce: 0 });
    });
});

describe("Add the secret ingredient", () => {
    test("adds the secret ingredient to the second array", () => {
        const friendsList = ['sauce', 'noodles', 'béchamel', 'marjoram'];
        const myList = ['sauce', 'noodles', 'meat', 'tomatoes'];
        addSecretIngredient(friendsList, myList);
        const newArray = ['sauce', 'noodles', 'meat', 'tomatoes', 'marjoram'];
        expect(myList).toEqual(newArray);
        
    });
    test("does not modify the first array", () => {
        const createFriendsList = () => [
            'noodles',
            'tomatoes',
            'sauce',
            'meat',
            'mozzarella',
            'eggplant',
            'ricotta',
            'parmesan',
          ];
      const friendsList = createFriendsList();
      const myList = ['ricotta', 'béchamel', 'sauce', 'noodles', 'meat'];
      addSecretIngredient(friendsList, myList);
      expect(friendsList).toEqual(createFriendsList());      
    });
    test("does not return anything", () => {
        const friendsList = [
            'sauce',
            'noodles',
            'béchamel',
            'mozzarella',
            'mustard',
          ];
      const myList = ['sauce', 'noodles', 'tomatoes'];
      expect(addSecretIngredient(friendsList, myList)).toBeUndefined();
    });
});

describe("Scale the recipe", () => {
    test("scales up correctly", () => {
        const recipe1 = {
            sauce: 0.5,
            noodles: 250,
            meat: 150,
            tomatoes: 3,
            onion: 0.5,
          };
      const expected1 = {
            sauce: 1.5,
            noodles: 750,
            meat: 450,
            tomatoes: 9,
            onion: 1.5,
          };
      expect(scaleRecipe(recipe1, 6)).toEqual(expected1);
      const recipe2 = {
            'sauce': 0.6,
            'noodles': 300,
            'carrots': 1,
            'mozzarella': 0.5,
            'ricotta': 50,
            'béchamel': 0.1,
            'tofu': 100,
          };
      const expected2 = {
            'sauce': 0.9,
            'noodles': 450,
            'carrots': 1.5,
            'mozzarella': 0.75,
            'ricotta': 75,
            'béchamel': 0.15,
            'tofu': 150,
          };
          expect(scaleRecipe(recipe2, 3)).toEqual(expected2);
    });
    test("scales down correctly", () => {
        const recipe = {
            sauce: 0.5,
            noodles: 250,
            meat: 150,
            tomatoes: 3,
            onion: 0.5,
          };
      const expected = {
            sauce: 0.25,
            noodles: 125,
            meat: 75,
            tomatoes: 1.5,
            onion: 0.25,
          };
      expect(scaleRecipe(recipe, 1)).toEqual(expected);          
    });
    test("works for an empty recipe", () => {
        expect(scaleRecipe({})).toEqual({});
    });
    test("does not modify the original recipe", () => {
        const recipe = {
            sauce: 1,
            noodles: 250,
            meat: 150,
            tomatoes: 3,
            onion: 2,
          };
      const copy = { ...recipe };
      scaleRecipe(recipe, 4);
      expect(recipe).toEqual(copy);      
    });

    
});