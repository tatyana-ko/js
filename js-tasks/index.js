// 1.
function findOdd(arr) {
  const res = arr.reduce(
    (acc, val) =>
      acc[val] ? { ...acc, [val]: acc[val] + 1 } : { ...acc, [val]: 1 },
    {}
  );

  const keys = Object.keys(res);

  const x = keys.find((el) => res[el] % 2 !== 0);

  return Number(x);
}

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// 2.
function calculateYears(principal, interest, tax, desired) {
  let count = 0;

  if (principal === desired) return 0;

  while (principal < desired) {
    const inc = principal * interest;
    const income = principal + (inc - inc * tax);
    principal = income;

    count += 1;
  }

  return count;
}

// console.log(calculateYears(1000, 0.05, 0.18, 1100));

// 3.
function isTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) return false;

  const p = (a + b + c) / 2;
  return Math.sqrt(p) * (p - a) * (p - b) * (p - c) > 0;
}

// console.log(isTriangle(-1, 3, 3));
// console.log(isTriangle(7, 2, 2));

// 3.
function solution(str, ending) {
  if (ending === "") return true;

  return ending === str.slice(-ending.length);
}

// console.log(solution("abcde", "cde"));
// console.log(solution('abcde', 'abc'));

// 4.
function dnaStrand(dna) {
  let newStr = "";

  for (const el of dna) {
    switch (el) {
      case "A":
        newStr += "T";
        break;

      case "T":
        newStr += "A";
        break;

      case "C":
        newStr += "G";
        break;

      case "G":
        newStr += "C";
        break;
    }
  }

  return newStr;
}

// console.log(dnaStrand("AAAA"));

// 5.

function check(a, x) {
  return !!a.find((el) => el === x);
}

// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));

// 6.

function XO(str) {
  if (!str.length) return true;

  const res = [...str].reduce((acc, el) => {
    const normalizeEl = el.toLowerCase();

    return {
      ...acc,
      [normalizeEl]: acc[normalizeEl] ? acc[normalizeEl] + 1 : 1,
    };
  }, {});

  return res.x === res.o;
}

// console.log(XO("xxOo"));

// 7.

function friend(friends) {
  return friends.filter((name) => name.length === 4);
}

// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));

// 8.

function isPangram(string) {
  const arrOfChar = string.split("");

  const filtredString = arrOfChar
    .filter((l) => l.toLowerCase() !== l.toUpperCase())
    .map((l) => l.toLowerCase());

  const uniqueChar = new Set(filtredString);

  return uniqueChar.size === 26;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("This is not a pangram."));

// 9.
function deleteNth(arr, n) {
  const res = [];
  const count = {};

  arr.forEach((el) => {
    if (!count[el]) {
      count[el] = 1;
      res.push(el);
    } else if (count[el] < n) {
      count[el] += 1;
      res.push(el);
    }
  });

  return res;
}

// console.log(deleteNth([20, 37, 20, 21], 1));
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

// 10.
function digPow(n, p) {
  const arrOfNumbers = n
    .toString()
    .split("")
    .map((n) => Number(n));

  const sum = arrOfNumbers.reduce((sum, n, i) => {
    return (sum += n ** (p + i));
  }, 0);

  console.log(sum);

  return sum % n === 0 ? sum / n : -1;
}

// console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(46288, 3));

// 11.
function expandedForm(num) {
  let res = [];

  const arrOfNumbers = num
    .toString()
    .split("")
    .map((n) => Number(n));

  arrOfNumbers.forEach((n, i) => {
    if (n === 0) return;

    const countOfZero = arrOfNumbers.length - 1 - i;
    const num = n * 10 ** countOfZero;

    res.push(num)
  });

  return res.join(' + ')
}

// console.log(expandedForm(70304));
// console.log(expandedForm(42));
