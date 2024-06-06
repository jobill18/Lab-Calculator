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
function factorial(num1) {
  for (let i = num1 - 1; i > 0; i -= 1){
    num1 *= i;
  }
  return num1
}


function calculate(expression) {
  const tokens = expression.split(' ');
  let num1;
  let num2;
  let operator;
if (tokens.length > 3){
  alert('Not a valid input! Try again.')
}
if (tokens.length < 2){
  alert('Not a valid input! Try again.')
}
if (tokens.length === 3){
   num1 = Number(tokens[0]);
   num2 = Number(tokens[2]);
   operator = tokens[1];
  // const sqrtNum = Number(tokens[1])
  // if (num1 == NaN) {
  //   return sqrt(sqrtNum);
  // }
  if (Number.isNaN(num1) || Number.isNaN(num2)){
    alert('Not a number! Try again');
    return;
  }
  if (operator === '+'){
    return add(num1,num2);
  } 
  if (operator === '-'){
    return subtract(num1,num2);
  } 
  if (operator === '*'){
    return multiply(num1,num2);
  } 
  if (operator === '/'){
    return divide(num1,num2);
  } 
  if (operator === '^'){
    return power(num1,num2);
  } 
  if (operator === '%'){
    return mod(num1,num2);
  }
}
  if(tokens.length === 2) {
    num1 = Number(tokens[1]);
    operator = tokens[0];
    if (Number.isNaN(num1)){
      alert('Not a number! Try again');
      return;
    } 
    if (operator === 'sqrt') {
      return sqrt(num1);
    }
    if (operator === '!') {
      if(num1<0){
        alert('Number must be a positive number!')
        return
      }
      if(Number.isInteger(num1)){
        return factorial(num1);
      } else {
        alert("Number must be an integer!");
        return;
      }
    }
  }
else {
  alert('Invalid operation! Try again.')
}
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
