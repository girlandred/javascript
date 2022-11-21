const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

let balance = prompt("Enter your balance: ");
let amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function fixAmount(amount){
    return "$" + amount.toFixed(2);
}

while (amount <= balance) {
  amount = amount + PHONE_PRICE;

  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

amount = amount + calculateTax(amount);
alert("Your purchuase: " + fixAmount(amount));

if (amount > balance) {
  alert("You can't buy anything!");
}
