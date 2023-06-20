import { isZero } from "./isZero";

test("give 0, returns true", () => {
  const result = isZero(0);
  expect(result).toBe(true);
})

test("give 1, returns false", () => {
  const result = isZero(1);
  expect(result).toBe(false);
})