// 1.
function getPermutations(str) {
  const res = [];

  if (str.length === 1) return [str];

  for (let i = 0; i < str.length; i += 1) {
    const cur = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);

    const x = getPermutations(rest);

    x.forEach((el) => res.push(cur + el));
  }

  const unique = new Set(res);

  return [...unique];
}

// console.log(getPermutations("abab"));

// 2.
function rot13(message) {
  const res = [];
  const arrOfChar = [...message];

  arrOfChar.forEach((el) => {
    if (el.toLowerCase() === el.toUpperCase()) {
      res.push(el);
      return;
    }

    const charCode = el.charCodeAt();
    const newCharCode = charCode + 13;

    if (el === el.toLowerCase()) {
      if (newCharCode >= 97 && newCharCode <= 122) {
        res.push(String.fromCharCode(newCharCode));
        return;
      }

      res.push(String.fromCharCode(newCharCode - 26));
    }

    if (el === el.toUpperCase()) {
      if (newCharCode >= 65 && newCharCode <= 90) {
        res.push(String.fromCharCode(newCharCode));
        return;
      }

      res.push(String.fromCharCode(newCharCode - 26));
    }
  });

  return res.join("");
}

// console.log(rot13("test"));
// console.log(rot13("Test"));

// 3.
function order(words) {
  const sorted = words.split(" ").sort((a, b) => {
    const first = a.match(/\d/)[0];
    const second = b.match(/\d/)[0];

    return first - second;
  });

  return sorted.join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// 4.
function stockList(books, categories) {
  if (books.length === 0) return "";

  const res = {};

  categories.forEach((el) => {
    res[el] = 0;

    for (const book of books) {
      const [symb, quantity] = book.split(" ");
      const firstChar = symb[0];

      if (firstChar === el) {
        res[el] += Number(quantity);
      }
    }
  });

  return categories.map((c) => `(${c} : ${res[c]})`).join(" - ");
}

// console.log(
//   stockList(
//     ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//     ["A", "B", "C", "D"]
//   )
// );

// 5.
function sumDigPow(a, b) {
  const arrOfNumbers = Array.from({ length: b - a + 1 }, (_, i) => a + i);

  const res = arrOfNumbers.reduce((acc, val) => {
    const num = [...String(val)];

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]) ** (i + 1);
    }

    if (sum === val) {
      acc.push(val);
    }

    return acc;
  }, []);

  return res;
}

// console.log(sumDigPow(1, 10));
// console.log(sumDigPow(50, 150));

// 6.
function encrypt(text, n) {
  if (n === 0 || text === null) return text;

  let count = 0;

  for (let i = 0; i < n; i++) {
    let oddStr = "";
    let evenStr = "";
    const arr = text.split("");

    arr.forEach((el, i) => (i % 2 === 0 ? (evenStr += el) : (oddStr += el)));

    text = oddStr + evenStr;
  }

  return text;
}

// console.log(encrypt("This is a test!", 2));

// 7.
function sortArray(array) {
  if (array.length === 0) return [];

  const even = array.reduce((acc, val, i) => {
    if (val % 2 === 0) {
      acc[i] = val;
    }

    return acc;
  }, {});

  const odd = array.filter((el) => el % 2 !== 0).sort((a, b) => a - b);

  const idx = Object.keys(even);

  idx.forEach((i) => {
    odd.splice(i, 0, even[i]);
  });

  return odd;

  // const odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
  // return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}

// console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]
