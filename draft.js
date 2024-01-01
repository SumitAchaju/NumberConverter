import {
  validateBase,
  reverseString,
  convertNumToAlphabet,
  convertAlphabetToNum,
} from "./js/utility.js";

function decimalToAny(input, base) {
  if (!validateBase(base)) return;
  input = Number(input);
  let output = "";
  let pointValue = "";
  let quotient, pointQuotient;
  let isPoint = false;

  if (input % 1 !== 0) {
    isPoint = true;
  }

  if (isPoint) {
    quotient = Number(input.toString().split(".")[0]);
    pointQuotient = Number("0." + input.toString().split(".")[1]);

    let count = 0;
    while (count < 5) {
      let value = pointQuotient * base;
      let remainder = Math.floor(value);
      if (remainder >= 10) {
        pointValue += convertNumToAlphabet(remainder);
      } else {
        pointValue += remainder.toString();
      }
      pointQuotient = Number("0." + value.toString().split(".")[1]);
      count++;
    }
  } else {
    quotient = input;
  }
  while (quotient !== 0) {
    let remainder = quotient % base;
    quotient = Math.floor(quotient / base);
    if (remainder >= 10) {
      output += convertNumToAlphabet(remainder);
    } else {
      output += remainder.toString();
    }
  }
  return reverseString(output) + "." + pointValue;
}

console.log(decimalToAny(3315.3, 16));

function anyToDecimal(input, base) {
  if (!validateBase(base)) return;
  input = input.toString();
  let isHexaDecimal = false;
  let isPoint = false;

  if (!Number(input)) {
    isHexaDecimal = true;
  }

  if (input.split(".").length == 2) {
    isPoint = true;
  }

  let output = 0;
  let pointValue = 0;
  let quotient, pointQuotient;

  if (isPoint) {
    let twoPoint = input.split(".");
    quotient = twoPoint[0];
    pointQuotient = twoPoint[1];
    pointQuotient.split("").forEach((item, index) => {
      if (isHexaDecimal && !Number(item)) item = convertAlphabetToNum(item);
      pointValue += Number(item) * Math.pow(base, -(index + 1));
    });
  } else {
    quotient = input;
  }
  reverseString(quotient)
    .split("")
    .forEach((item, index) => {
      if (isHexaDecimal && !Number(item)) item = convertAlphabetToNum(item);

      output += Number(item) * Math.pow(base, index);
    });
  return output + pointValue;
}

console.log(anyToDecimal("55.5", 8));
