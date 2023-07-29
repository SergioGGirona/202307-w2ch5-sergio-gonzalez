import { generateArray, playTurn } from "./functions.js";
describe("Given generateArray function", () => {
  describe("When it is call with (4,2)", () => {
    test("Then array.length should be  8", () => {
      const columns = 2;
      const rows = 4;
      const expected = 8;
      const result = generateArray(columns, rows);
      expect(result.length).toBe(expected);
    });
  });

  describe("When it is call with (12,14)", () => {
    test("Then array.length should be  168", () => {
      const columns = 12;
      const rows = 14;
      const expected = 168;
      const result = generateArray(columns, rows);
      expect(result.length).toBe(expected);
    });
  });

  describe("When it is call with (12,14)", () => {
    test("Then Columns should be  12", () => {
      const cells = generateArray(12, 14);
      const result = cells.filter((cel) => cel.row === 1).length;
      const expected = 12;
      expect(result).toBe(expected);
    });
  });
});

describe("Given checkCornerTopLeft function", () => {
  describe("When it is call with [0 1 1 0  1 1 1 1  1 0 0 1  0 1 0 1]", () => {
    test("Then cell  status should be  0}", () => {
      const origin = [
        { status: 0, row: 1, column: 1 },
        { status: 1, row: 1, column: 2 },
        { status: 1, row: 1, column: 3 },
        { status: 0, row: 1, column: 4 },
        { status: 1, row: 2, column: 1 },
        { status: 1, row: 2, column: 2 },
        { status: 1, row: 2, column: 3 },
        { status: 1, row: 2, column: 4 },
        { status: 1, row: 3, column: 1 },
        { status: 0, row: 3, column: 2 },
        { status: 0, row: 3, column: 3 },
        { status: 1, row: 3, column: 4 },
        { status: 0, row: 4, column: 1 },
        { status: 1, row: 4, column: 2 },
        { status: 0, row: 4, column: 3 },
        { status: 1, row: 4, column: 4 },
      ];
      const result = checkCornerTopLeft(origin, false);
      const expected = 1;
      expect(result).toBe(expected);
    });
  });

  describe("When it is call with [0, 1, 0, 1   1, 0, 1, 0]", () => {
    test("Then cell  status should be  0", () => {
      const origin = [
        { status: 0, row: 1, column: 1 },
        { status: 1, row: 1, column: 2 },
        { status: 1, row: 1, column: 3 },
        { status: 0, row: 1, column: 4 },
        { status: 1, row: 2, column: 1 },
        { status: 1, row: 2, column: 2 },
        { status: 1, row: 2, column: 3 },
        { status: 1, row: 2, column: 4 },
        { status: 1, row: 3, column: 1 },
        { status: 0, row: 3, column: 2 },
        { status: 0, row: 3, column: 3 },
        { status: 1, row: 3, column: 4 },
        { status: 0, row: 4, column: 1 },
        { status: 1, row: 4, column: 2 },
        { status: 0, row: 4, column: 3 },
        { status: 1, row: 4, column: 4 },
      ];
      const result = playTurn(origin);
      const expected = [
        { status: 1, row: 1, column: 1 },
        { status: 0, row: 1, column: 2 },
        { status: 0, row: 1, column: 3 },
        { status: 1, row: 1, column: 4 },
        { status: 1, row: 2, column: 1 },
        { status: 0, row: 2, column: 2 },
        { status: 0, row: 2, column: 3 },
        { status: 1, row: 2, column: 4 },
        { status: 1, row: 3, column: 1 },
        { status: 0, row: 3, column: 2 },
        { status: 0, row: 3, column: 3 },
        { status: 1, row: 3, column: 4 },
        { status: 0, row: 4, column: 1 },
        { status: 0, row: 4, column: 2 },
        { status: 1, row: 4, column: 3 },
        { status: 0, row: 4, column: 4 },
      ];
      expect(result).toBe(expected);
    });
  });
});
