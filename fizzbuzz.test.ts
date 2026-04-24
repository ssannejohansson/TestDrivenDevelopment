// Red, failing test.

test("returns Fizz for multiples of 3", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test("return Buzz for multiples of 5", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

test("returns FizzBuzz for multiples of 15", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test("returns the number as string otherwise", () => {
  expect(fizzBuzz(7)).toBe("7");
});

// Green, make it pass.
export const fizzBuzz = (n: number): string => {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
};

