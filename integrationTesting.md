# Exercises

## Exercise 1 — The Coffee Shop

You run a coffee shop. Model it with the following three functions:

### `createDrink(type)`

- Accepts `"latte"`, `"espresso"`, or `"cappuccino"`
- Returns an object `{ type, price }` using this menu:
  - latte: 45
  - espresso: 30
  - cappuccino: 50

### `prepareOrder(drink)`

- Logs `"Preparing <type>..."`
- Returns a randomly generated ticket number (integer between 0–999)

### `processPayment(ticketNumber, amount)`

- Throws `"No ticket number provided"` if `ticketNumber` is falsy
- Logs `"Payment of <amount> received for ticket #<ticketNumber>"`
- Returns `true`

`orderDrink(drinkType)` composes the three above, just like `orderPizza` did.

### Your tasks

Write **unit tests** for:

- `createDrink` with a known type (check both `type` and `price`)
- `createDrink` with an unknown type (what do you expect `price` to be?)
- `prepareOrder` (what can you assert about the ticket number it returns?)

Write an **integration test** for:

- `orderDrink("latte")` — does the full flow return `true`?

Think about what makes the integration test different from the `orderPizza` unit test in the tutorial. They look similar, but what is actually being verified in each case?

---

## Exercise 2 — The Bookstore

You manage an online bookstore checkout. Model it with the following:

### `findBook(title)`

- Accepts `"dune"`, `"neuromancer"`, or `"foundation"`
- Returns `{ title, price }` using this catalogue:
  - dune: 89
  - neuromancer: 79
  - foundation: 75

### `reserveStock(book)`

- Logs `"Reserving stock for <title>"`
- Returns a reservation code — a random integer between 1000–9999 (inclusive)

### `confirmPurchase(reservationCode, price)`

- Throws `"Invalid reservation"` if `reservationCode` is falsy
- Logs `"Purchase confirmed. Reservation: <code>, Amount: <price>"`
- Returns `{ success: true, code: reservationCode }`

`buyBook(title)` composes the three above.

### Your tasks

Write **unit tests** for:

- `findBook` with a valid title
- `findBook` with a title not in the catalogue
- `reserveStock` — what properties of the return value can you assert?
- `confirmPurchase` — does it throw when called with a falsy reservation code?

Write an **integration test** for:

- `buyBook("dune")` — does the result have `success: true`?

Notice the difference between `.toEqual` vs `.toBe`, and why it matters here. `confirmPurchase` returns an object, not just `true`. How does your integration test assertion change compared to Exercise 1? Consider using `.toEqual`.