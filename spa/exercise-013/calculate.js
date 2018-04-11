const buttons = document.getElementById("buttons");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const output = document.getElementById("output");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function printClear(value) {
  output.innerHTML = value;
  input1.value = '';
  input2.value = '';
}

buttons.addEventListener("click", (event) => {
  let targetFunc = event.target.id;
  let result;
  switch (targetFunc) {
    case "add":
      result = add(+input1.value, +input2.value);
      break;
    case "subtract":
      result = subtract(+input1.value, +input2.value);
      break;
    case "multiply":
      result = multiply(+input1.value, +input2.value);
      break;
    case "divide":
      result = divide(+input1.value, +input2.value);
      break;
    default:
      break;
  }
  printClear(result);
});
