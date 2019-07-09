import Big from "big.js";

export default function operator(number1, number2, operator) {

  //Constant Declaration 
  const numOne = new Big(number1 || "0");
  const numTwo = new Big(
    number2 || (operator === "÷" || operator === "x" ? "1" : "0")
  );

  //Addition
  if (operator === "+") {
    return numOne.plus(numTwo).toString();

  //Subtraction
  } else if (operator === "-") {
    return numOne.minus(numTwo).toString();

  //Multiplication
  } else if (operator === "x") {
    return numOne.times(numTwo).toString();

  //Division
  } else if (operator === "÷") {
    //Make sure denominator is not zero
    if (numTwo === "0") {
      alert("You cannot divide by 0!");
      return "0";

    } else {
      return numOne.div(numTwo).toString();
    }
  }
}
