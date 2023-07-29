import { generateArray } from "./functions.js";
describe("Given generateArray function", () => {
  describe("When it is call with (3,3)", () => {
    test("Then array.length should be  9", () => {
      const columns = 3;
      const rows = 3;
      const expected = 9;
      const result = generateArray(columns, rows);
      expect(result.length).toBe(expected);
    });
  });
});
