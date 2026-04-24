// Exercise 1 - The Coffee Shop

const menu = {
  latte: 45,
  espresso: 30,
  cappuccino: 50,
};

function createDrink(type) {
  return { type, price: menu[type] };
}

function prepareOrder(drink) {
  console.log(`Preparing ${drink.type}...`);
  return Math.floor(Math.random() * 1000);
}

function processPayment(ticketNumber, amount) {
  if (!ticketNumber && ticketNumber !== 0) {
    throw new Error("No ticket number provided");
  }
  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
  return true;
}

function orderDrink(drinkType) {
  const drink = createDrink(drinkType);
  const ticketNumber = prepareOrder(drink);
  return processPayment(ticketNumber, drink.price);
}

module.exports = { createDrink, prepareOrder, processPayment, orderDrink };
