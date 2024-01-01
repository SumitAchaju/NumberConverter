const BASE = {
  binary: 2,
  octal: 8,
  decimal: 10,
  hexadecimal: 16,
};
const AlphaNumValue = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

export function convertNumToAlphabet(num) {
  if (!num in AlphaNumValue) return;
  return AlphaNumValue[num];
}

export function convertAlphabetToNum(alphabet) {
  let validate = false;
  let num;
  for (const item in AlphaNumValue) {
    if (AlphaNumValue[item] == alphabet) {
      validate = true;
      num = item;
      break;
    }
  }
  if (!validate) return;
  return num;
}

export function validateBase(base) {
  let value = false;
  for (const item in BASE) {
    if (BASE[item] == base) {
      value = true;
      break;
    }
  }
  return value;
}

export function validateData(input, inputBase, convertBase) {
  let value = true;
  if (!validateBase(inputBase) || !validateBase(convertBase)) {
    return false;
  }
  const numList = input.toUpperCase().split("");
  if (inputBase === 16) {
    const validNum = "0123456789ABCDEF";
    for (const item of numList) {
      if (item == ".") continue;
      if (!validNum.includes(item)) {
        value = false;
        break;
      }
    }
  } else {
    for (const item of numList) {
      if (item == ".") continue;
      if (!(parseInt(item) < inputBase)) {
        value = false;
        break;
      }
    }
  }
  return value;
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}
