import { add } from "./main";
describe("add", () => {
  it("should return 3 for input 1, 2", () => {
    expect(add(1, 2)).toBe(3);
  });
});
