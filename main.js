import { convertAny } from "./js/utility.js";

//  Binary Number

const binaryOctalOutput = document.querySelector(".binary .output-octal-value");
const binaryDecimalOutput = document.querySelector(
  ".binary .output-decimal-value"
);
const binaryHexadecimalOutput = document.querySelector(
  ".binary .output-hexadecimal-value"
);
const binaryInput = document.getElementById("binary-input");
const binaryClear = document.getElementById("binary-clear");
const binaryForm = document.getElementById("binaryConvertForm");

function convertBinary(e) {
  e.preventDefault();
  const data = e.target.data.value;
  const octal = convertAny(data, 2, 8);
  const decimal = convertAny(data, 2, 10);
  const hexadecimal = convertAny(data, 2, 16);
  if (octal == "invalid" || decimal == "invalid" || hexadecimal == "invalid") {
    alert("Invalid Input For Binary!!");
    e.target.data.value = "";
    return;
  }
  binaryOctalOutput.textContent = octal;
  binaryDecimalOutput.textContent = decimal;
  binaryHexadecimalOutput.textContent = hexadecimal;
}

function binaryClearAll(e) {
  e.preventDefault();
  binaryOctalOutput.textContent = "0.0";
  binaryDecimalOutput.textContent = "0.0";
  binaryHexadecimalOutput.textContent = "0.0";
  binaryInput.value = "";
}

binaryForm.addEventListener("submit", convertBinary);

binaryClear.onclick = binaryClearAll;

//  Octal Number

const octalBinaryOutput = document.querySelector(".octal .output-binary-value");
const octalDecimalOutput = document.querySelector(
  ".octal .output-decimal-value"
);
const octalHexadecimalOutput = document.querySelector(
  ".octal .output-hexadecimal-value"
);
const octalInput = document.getElementById("octal-input");
const octalClear = document.getElementById("octal-clear");
const octalForm = document.getElementById("octalConvertForm");

function convertOctal(e) {
  e.preventDefault();
  const data = e.target.data.value;
  const binary = convertAny(data, 8, 2);
  const decimal = convertAny(data, 8, 10);
  const hexadecimal = convertAny(data, 8, 16);
  if (binary == "invalid" || decimal == "invalid" || hexadecimal == "invalid") {
    alert("Invalid Input For Octal!!");
    e.target.data.value = "";
    return;
  }
  octalBinaryOutput.textContent = binary;
  octalDecimalOutput.textContent = decimal;
  octalHexadecimalOutput.textContent = hexadecimal;
}

function octalClearAll(e) {
  e.preventDefault();
  octalBinaryOutput.textContent = "0.0";
  octalDecimalOutput.textContent = "0.0";
  octalHexadecimalOutput.textContent = "0.0";
  octalInput.value = "";
}

octalForm.addEventListener("submit", convertOctal);

octalClear.onclick = octalClearAll;

//  Decimal Number

const decimalBinaryOutput = document.querySelector(
  ".decimal .output-binary-value"
);
const decimalOctalOutput = document.querySelector(
  ".decimal .output-octal-value"
);
const decimalHexadecimalOutput = document.querySelector(
  ".decimal .output-hexadecimal-value"
);
const decimalInput = document.getElementById("decimal-input");
const decimalClear = document.getElementById("decimal-clear");
const decimalForm = document.getElementById("decimalConvertForm");

function convertDecimal(e) {
  e.preventDefault();
  const data = e.target.data.value;
  const binary = convertAny(data, 10, 2);
  const octal = convertAny(data, 10, 8);
  const hexadecimal = convertAny(data, 10, 16);
  if (binary == "invalid" || octal == "invalid" || hexadecimal == "invalid") {
    alert("Invalid Input For Decimal!!");
    e.target.data.value = "";
    return;
  }
  decimalBinaryOutput.textContent = binary;
  decimalOctalOutput.textContent = octal;
  decimalHexadecimalOutput.textContent = hexadecimal;
}

function decimalClearAll(e) {
  e.preventDefault();
  decimalBinaryOutput.textContent = "0.0";
  decimalOctalOutput.textContent = "0.0";
  decimalHexadecimalOutput.textContent = "0.0";
  decimalInput.value = "";
}

decimalForm.addEventListener("submit", convertDecimal);

decimalClear.onclick = decimalClearAll;

//  Hexadecimal Number

const hexadecimalBinaryOutput = document.querySelector(
  ".hexadecimal .output-binary-value"
);
const hexadecimalOctalOutput = document.querySelector(
  ".hexadecimal .output-octal-value"
);
const hexadecimaldecimalOutput = document.querySelector(
  ".hexadecimal .output-decimal-value"
);
const hexadecimalInput = document.getElementById("hexadecimal-input");
const hexadecimalClear = document.getElementById("hexadecimal-clear");
const hexadecimalForm = document.getElementById("hexadecimalConvertForm");

function convertHexadecimal(e) {
  e.preventDefault();
  const data = e.target.data.value;
  const binary = convertAny(data, 16, 2);
  const octal = convertAny(data, 16, 8);
  const decimal = convertAny(data, 16, 10);
  if (binary == "invalid" || octal == "invalid" || decimal == "invalid") {
    alert("Invalid Input For Hexadecimal!!");
    e.target.data.value = "";
    return;
  }
  hexadecimalBinaryOutput.textContent = binary;
  hexadecimalOctalOutput.textContent = octal;
  hexadecimaldecimalOutput.textContent = decimal;
}

function hexadecimalClearAll(e) {
  e.preventDefault();
  hexadecimalBinaryOutput.textContent = "0.0";
  hexadecimalOctalOutput.textContent = "0.0";
  hexadecimaldecimalOutput.textContent = "0.0";
  hexadecimalInput.value = "";
}

hexadecimalForm.addEventListener("submit", convertHexadecimal);

hexadecimalClear.onclick = hexadecimalClearAll;
