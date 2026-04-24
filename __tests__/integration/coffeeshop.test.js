// Exercise 1 - The Coffee Shop Tests

const {
  createDrink,
  prepareOrder,
  processPayment,
  orderDrink,
} = require("../../src/coffeeshop");

// --- Unit Tests ---

describe("createDrink", () => {
  test("returns correct type and price for a known drink", () => {
    const drink = createDrink("latte");
    expect(drink.type).toBe("latte");
    expect(drink.price).toBe(45);
  });

  test("returns undefined price for an unknown drink type", () => {
    const drink = createDrink("smoothie");
    expect(drink.type).toBe("smoothie");
    expect(drink.price).toBeUndefined();
  });
});

describe("prepareOrder", () => {
  test("returns a ticket number between 0 and 999", () => {
    const drink = createDrink("espresso");
    const ticket = prepareOrder(drink);
    expect(typeof ticket).toBe("number");
    expect(ticket).toBeGreaterThanOrEqual(0);
    expect(ticket).toBeLessThanOrEqual(999);
  });
});

describe("processPayment", () => {
  test("returns true when given a valid ticket number", () => {
    expect(processPayment(42, 45)).toBe(true);
  });

  test("throws when ticketNumber is falsy (undefined)", () => {
    expect(() => processPayment(undefined, 45)).toThrow(
      "No ticket number provided",
    );
  });

  test("throws when ticketNumber is null", () => {
    expect(() => processPayment(null, 45)).toThrow("No ticket number provided");
  });
});

// --- Integration Test ---

describe("orderDrink", () => {
  test("full flow for ordering a latte returns true", () => {
    const result = orderDrink("latte");
    expect(result).toBe(true);
  });
});