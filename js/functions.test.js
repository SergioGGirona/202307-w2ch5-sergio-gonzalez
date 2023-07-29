import { generateArray } from "./functions.js";
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
});

describe("Given generateArray function", () => {
  describe("When it is call with (2, 4)", () => {
    test("Then array.length should be  8", () => {
      const columns = 2;
      const rows = 4;
      const expected = 8;
      const result = generateArray(columns, rows);
      expect(result.length).toBe(expected);
    });
  });

  describe("When it is call with (12,14)", () => {
    test("Then array.length should be  8", () => {
      const columns = 12;
      const rows = 14;
      const expected = 168;
      const result = generateArray(columns, rows);
      expect(result.length).toBe(expected);
    });
  });
});
