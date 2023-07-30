import { generateArray, playTurn } from "./main.js";
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

describe("Given playTurn function", () => {
  describe("When it is call with [0 1 1 0  1 1 1 1  1 0 0 1  0 1 0 1]", () => {
    test("Then cell status should be  0}", () => {
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

      expect(result).toEqual(expected);
    });
  });
});

describe("When it is call with a user choice of 5 rows and 6 columns", () => {
  test("Then userArrayColumns should be 6", () => {
    const userArray = [
      {
        status: 0,
        row: 1,
        column: 1,
      },
      {
        status: 0,
        row: 1,
        column: 2,
      },
      {
        status: 0,
        row: 1,
        column: 3,
      },
      {
        status: 1,
        row: 1,
        column: 4,
      },
      {
        status: 1,
        row: 1,
        column: 5,
      },
      {
        status: 0,
        row: 2,
        column: 1,
      },
      {
        status: 1,
        row: 2,
        column: 2,
      },
      {
        status: 0,
        row: 2,
        column: 3,
      },
      {
        status: 1,
        row: 2,
        column: 4,
      },
      {
        status: 0,
        row: 2,
        column: 5,
      },
      {
        status: 0,
        row: 3,
        column: 1,
      },
      {
        status: 1,
        row: 3,
        column: 2,
      },
      {
        status: 1,
        row: 3,
        column: 3,
      },
      {
        status: 0,
        row: 3,
        column: 4,
      },
      {
        status: 1,
        row: 3,
        column: 5,
      },
      {
        status: 0,
        row: 4,
        column: 1,
      },
      {
        status: 1,
        row: 4,
        column: 2,
      },
      {
        status: 0,
        row: 4,
        column: 3,
      },
      {
        status: 0,
        row: 4,
        column: 4,
      },
      {
        status: 0,
        row: 4,
        column: 5,
      },
      {
        status: 1,
        row: 5,
        column: 1,
      },
      {
        status: 1,
        row: 5,
        column: 2,
      },
      {
        status: 0,
        row: 5,
        column: 3,
      },
      {
        status: 1,
        row: 5,
        column: 4,
      },
      {
        status: 0,
        row: 5,
        column: 5,
      },
      {
        status: 0,
        row: 6,
        column: 1,
      },
      {
        status: 0,
        row: 6,
        column: 2,
      },
      {
        status: 0,
        row: 6,
        column: 3,
      },
      {
        status: 1,
        row: 6,
        column: 4,
      },
      {
        status: 0,
        row: 6,
        column: 5,
      },
    ];
    const userArrayColumns = userArray.filter((cel) => cel.column === 1).length;

    const expected = 6;

    expect(userArrayColumns).toEqual(expected);
  });
});
