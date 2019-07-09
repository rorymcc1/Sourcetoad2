import Big from "big.js";
import operator from "./operator";

export default function calculate(data, buttonName) {
  //Clear Result Display
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operator: null
    };
  }

  //If a Number is Entered
  if (/[0-9]+/.test(buttonName)) {
    //If Button select and next equals 0 return empty
    if (buttonName === "0" && data.next === "0") {
      return {};
    }

    //If Operator is set
    else if (data.operator) {
      //If next is present append button number to next
      if (data.next) {
        return { next: data.next + buttonName };

        //else return Button Number
      } else {
        return { next: buttonName };
      }
    }
    // If NO operator, update next and clear the value
    else if (data.next) {
      const next = data.next === "0" ? buttonName : data.next + buttonName;
      return {
        next,
        total: null
      };
    } else {
      return {
        next: buttonName,
        total: null
      };
    }
  }

  //If Percent operator
  else if (buttonName === "%") {
    if (data.operator && data.next) {
      const result = operator(data.total, data.next, data.operator);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operator: null
      };
    } else if (data.next) {
      return {
        next: Big(data.next)
          .div(Big("100"))
          .toString()
      };
    } else {
      return {};
    }
  }

  //If decimal point
  else if (buttonName === ".") {
    if (data.next) {
      if (data.next.includes(".")) {
        return {};
      } else {
        return { next: data.next + "." };
      }
    } else {
      return { next: "0." };
    }
  }

  //If Equals operator
  else if (buttonName === "=") {
    if (data.next && data.operator) {
      return {
        total: operator(data.total, data.next, data.operator),
        next: null,
        operator: null
      };
    } else {
      return {};
    }
  }

  //If Number Sign switch
  else if (buttonName === "+/-") {
    if (data.next) {
      return { next: (-1 * parseFloat(data.next)).toString() };
    } else if (data.total) {
      return { total: (-1 * parseFloat(data.total)).toString() };
    } else {
      return {};
    }
  }

  //If opertor is set to add, subtract, multiply, and divide
  else if (data.operator) {
    return {
      total: operator(data.total, data.next, data.operator),
      next: null,
      operator: buttonName
    };
  }

  //If No next value set operator equal to button name
  else if (!data.next) {
    return { operator: buttonName };
  }

  //Else set total equal to next and operator equal to button name
  else {
    return {
      total: data.next,
      next: null,
      operator: buttonName
    };
  }
}
