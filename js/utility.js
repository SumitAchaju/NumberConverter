const BASE = {
  binary: 2,
  octal: 8,
  decimal: 10,
  hexadecimal: 16,
};

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

export function anyToDecimal(input, base) {
  const parts = input.split(".");

  const integerDecimal = parseInt(parts[0], base);

  let fractionalDecimal = 0;
  if (parts.length === 2) {
    fractionalDecimal =
      parseInt(parts[1], base) / Math.pow(base, parts[1].length);
  }

  const decimalNumber = integerDecimal + fractionalDecimal;

  return decimalNumber;
}

export function convertAny(input, inputBase, convertBase) {
  input = input.toString();
  if (!validateData(input, inputBase, convertBase)) return "invalid";
  const decimalNum = anyToDecimal(input, inputBase);
  return decimalNum.toString(convertBase).toUpperCase();
}
