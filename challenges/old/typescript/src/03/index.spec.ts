import { expect } from "chai";
import { canPlant } from ".";

describe("Coding Challenge 03", function () {
  it("should return whether able to plant or not", function () {
    expect(canPlant([1, 0, 0, 0, 1], 2)).eq(true);
    expect(canPlant([1, 0, 0, 0, 1], 1)).eq(false);
    expect(canPlant([1], 0)).eq(false);
    expect(canPlant([0, 0], 0)).eq(true);
    expect(canPlant([0, 0], 1)).eq(true);
    expect(canPlant([1, 0, 0, 0, 1], 4)).eq(false);
    expect(canPlant([1, 0, 0, 1, 0], 2)).eq(false);
  });
});
