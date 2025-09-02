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
