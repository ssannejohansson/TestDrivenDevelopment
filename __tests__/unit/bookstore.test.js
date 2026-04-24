// Exercise 2 - The Bookstore Tests

const {
  findBook,
  reserveStock,
  confirmPurchase,
  buyBook,
} = require("../../src/bookstore");

// --- Unit Tests ---

describe("findBook", () => {
  test("returns correct title and price for a valid book", () => {
    const book = findBook("dune");
    expect(book.title).toBe("dune");
    expect(book.price).toBe(89);
  });

  test("returns undefined price for a book not in the catalogue", () => {
    const book = findBook("hobbit");
    expect(book.title).toBe("hobbit");
    expect(book.price).toBeUndefined();
  });
});

describe("reserveStock", () => {
  test("returns a reservation code between 1000 and 9999", () => {
    const book = findBook("dune");
    const code = reserveStock(book);
    expect(typeof code).toBe("number");
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });
});

describe("confirmPurchase", () => {
  test("returns success object with the reservation code", () => {
    const result = confirmPurchase(1234, 89);
    expect(result).toEqual({
      success: true,
      code: 1234
    });
  });

  test("throws when reservationCode is falsy (null)", () => {
    expect(() => confirmPurchase(null, 89)).toThrow("Invalid reservation");
  });

  test("throws when reservationCode is undefined", () => {
    expect(() => confirmPurchase(undefined, 89)).toThrow("Invalid reservation");
  });
});

// --- Integration Test ---

describe("buyBook", () => {
  test("full flow for buying 'dune' returns success: true", () => {
    const result = buyBook("dune");
    // .toEqual is used here because result is an object, not a primitive.
    // .toBe would fail since two different objects are never === even with the same shape.
    expect(result).toEqual(expect.objectContaining({
      success: true
    }));
  });
});