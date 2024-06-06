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
function power(num1, num2) {
  return num1 ** num2;
}
function mod(num1, num2) {
  return num1 % num2;
}
function sqrt(num1) {
  return num1 ** 0.5;
}


function calculate(expression) {
  const tokens = expression.split(' ');
  if (token[1] === "sqrt") {
  sqrt(token[2]);
  } else if (token[2] === '+'){
    add(token[1],token[2];)
  } else if (token[2] === '-'){
    add(token[1],token[2];)
  } else if (token[2] === '*'){
    multiply(token[1],token[2];)
  } else if (token[2] === '/'){
    divide(token[1],token[2];)
  } else if (token[2] === '^'){
    power(token[1],token[2];)
  } else if (token[2] === '%'){
    mod(token[1],token[2];)
}
















/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
