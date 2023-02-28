const add = (a, b) => {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  return num1 + num2;
};
const multiply = (a, b) => {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  return num1 * num2;
};
const divide = (a, b) => {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  return num1 / num2;
};
const substract = (a, b) => {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  return num1 - num2;
};

export const calculations = () => {
  switch (calc.sign) {
    case '+':
      let result = add(calc.res, calc.num);
      return setCalc({res: result, sign: e, num: ''});
    case '-':
      console.log(calc, 'state');
      let sub = substract(calc.res, calc.num);
      return setCalc({res: sub, sign: e, num: ''});
    case 'x':
      let mul = multiply(calc.res, calc.num);
      return setCalc({res: mul, sign: e, num: ''});
    case '/':
      let div = divide(calc.res, calc.num);
      return setCalc({res: div, sign: e, num: ''});
    default:
      return;
  }
};
