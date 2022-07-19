import { addPlayer, applyMondayBonus, createScoreBoard, removePlayer, updateScore, normalizeScore } from "../src/highScoreBoard";

describe("Create a new high score board", () => {
  test("creates a new board with a test entry", () => {
  expect(createScoreBoard()).toEqual({ 'The Best Ever': 1000000 });
  });
});

describe("Add players to a score board", () => {
  test("adds a player and score to the board", () => {
    const scoreBoard = {
        'Mother Theresa': 1583,
        'John Doe': 865,
      };
    expect(addPlayer(scoreBoard, 'Winnie the Pooh', 546)).toEqual({'Mother Theresa': 1583,'John Doe': 865, 'Winnie the Pooh': 546});
  });
});

describe("Remove players from a score board", () => {
    test("removes a player from the score board", () => {
      const scoreBoard = {
          'Mother Theresa': 1583,
          'John Doe': 865,
          'Winnie the Pooh': 546
        };
      expect(removePlayer(scoreBoard, 'John Doe')).toEqual({'Mother Theresa': 1583,'Winnie the Pooh': 546});
    });
    test("does nothing if the player is not on the board", () => {
        const scoreBoard = {
            'Mother Theresa': 1583,
            'John Doe': 865,
            'Winnie the Pooh': 546
          };
        expect(removePlayer(scoreBoard, 'Cinderella')).toEqual(scoreBoard);
      });
  });

  describe("Increase a player's score", () => {
    test("increases a player's score", () => {
      const scoreBoard = {
          'Mother Theresa': 1583,
          'John Doe': 865,
          'Winnie the Pooh': 290
        };
      expect(updateScore(scoreBoard, 'Winnie the Pooh', 740)).toEqual({'Mother Theresa': 1583,'John Doe': 865, 'Winnie the Pooh': 1030});
    });
  });
  
  describe("Apply Monday bonus points", () => {
    test("adds 100 points for all players", () => {
      const scoreBoard = {
          'Mother Theresa': 1583,
          'John Doe': 865,
          'Winnie the Pooh': 290
        };
      expect(applyMondayBonus(scoreBoard)).toEqual({'Mother Theresa': 1683,'John Doe': 965, 'Winnie the Pooh': 390});
    });
    test("does nothing if the score board is empty", () => {
        const scoreBoard = {}
        expect(applyMondayBonus(scoreBoard)).toEqual({});
      });
  });
  
  describe("Normalize a high score", () => {
    test("applies the normalization function", () => {
        const params = {
            score: 45,
            normalizeFunction: function (score) {
              return score * 3 - 10;
            },
          }
      expect(normalizeScore(params)).toEqual(125);
    });
    test("works for different params", () => {
        const params = {
            score: 2100,
            normalizeFunction: function (score) {
              return score / 2 + 100;
            },
          };
      
          expect(normalizeScore(params)).toEqual(1150);
      });
  });
  