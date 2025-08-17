// Использовать только Array.prototype.map()

// ----------------------------Уровень 1 — Базовые----------------------------

// 1. Преобразуй массив чисел в массив строк.
// [1, 2, 3] → ["1", "2", "3"]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const strings = numbers.map((val) => String(val));
// console.log(strings);

// 2. Добавь к каждому числу в массиве префикс "№".
// [5, 10, 15] → ["№5", "№10", "№15"]

const array = [5, 10, 15];
const numbersArray = array.map((val) => String(`№${val}`));
// console.log(numbersArray);

// 3. Преобразуй массив строк в массив длин этих строк.
// ["apple", "banana", "kiwi"] → [5, 6, 4]

const arr = ["apple", "banana", "kiwi"];
const lengths = arr.map((val) => val.length);
// console.log(lengths);

// 4. Сделай первую букву каждого слова заглавной, а остальные в нижнем регистре.
// ["joHn", "DOE"] → ["John", "Doe"]

const names = ["joHn", "DOE"];
const normalizedNames = names.map(
  (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
);
// console.log(normalizedNames);

// 5. Создай массив квадратов каждого числа.
// [2, 3, 4] → [4, 9, 16]

const n = [2, 3, 4];
const doubleN = n.map((number) => number ** 2);
// console.log(doubleN);

//  ----------------------------Уровень 2 — Работа со структурами----------------------------

// 6. Извлеки имена из массива объектов.
// [{name: "Alice"}, {name: "Bob"}] → ["Alice", "Bob"]

const objArr = [{ name: "Alice" }, { name: "Bob" }];
const result = objArr.map(({ name }) => name);

// console.log(result);

// 7. Преобразуй массив чисел в объекты с полями original и double.
// [1, 2] → [{original: 1, double: 2}, {original: 2, double: 4}]

const numArr = [1, 2, 3];
const res = numArr.map((number) => ({ original: number, double: number * 2 }));

// console.log(res);

// 8. Преобразуй массив дат в строки формата "YYYY-MM-DD".
// [new Date(2025, 0, 1)] → ["2025-01-11"]

const datesArr = [new Date(2025, 0, 1)];
const normalizedDates = datesArr.map((date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const normalMonth = (month < 10 ? "0" : "") + month;
  const normalDay = (day < 10 ? "0" : "") + day;

  return `${year}-${normalMonth}-${normalDay}`;
});

// console.log(normalizedDates);

// 9. Создай массив индексов, где чётные числа находятся.
// [10, 15, 20] → [0, 2]

const array1 = [10, 15, 20];
const idxArray = array1
  .map((num, i) => {
    if (num % 2 !== 0) return;

    return i;
  })
  .filter((num) => typeof num === "number");

// console.log(idxArray);

// 10. Добавь каждому элементу массива его индекс в качестве суффикса.
// ["a", "b", "c"] → ["a_0", "b_1", "c_2"]

const arr10 = ["a", "b", "c"];
const suffixArr = arr10.map((str, i) => `${str}_${i}`);

// console.log(suffixArr);

//  ----------------------------Уровень 3 — Логика и условия----------------------------

// 11. Пометь каждый элемент как "чётный"/"нечётный".
// [1, 2, 3] → ["odd", "even", "odd"]

const arr11 = [1, 2, 3];
const oddEvenArr = arr11.map((num) => (num % 2 === 0 ? "even" : "odd"));

// console.log(oddEvenArr);

// 12. Преобразуй массив температур по Цельсию в Фаренгейты с округлением.
// [0, 100] → [32, 212]

const tempArr = [0, 100];
const farArr = tempArr.map((temp) => (temp * 9) / 5 + 32);

// console.log(farArr);

// 13. Укажи, превышает ли каждый элемент среднее значение массива.
// [10, 20, 30] → [false, false, true]

const numbArr = [10, 20, 30];
const averageVal = numbArr.reduce((acc, el) => acc + el, 0);
const newNumbArr = numbArr.map((num) => num > averageVal / numArr.length);

// console.log(newNumbArr);

// 14. Сократи строки, если они длиннее 10 символов, добавив "...".
// ["short", "averylongstring"] → ["short", "averylong..."]

const strArr = ["short", "averylongstring"];
const normalizedStrArr = strArr.map((str) =>
  str.length > 10 ? `${str.slice(0, 9)}...` : str
);

// console.log(normalizedStrArr);

// 15. Преобразуй массив чисел в булев массив, где true — это простое число.
// [2, 4, 5] → [true, false, true]

const numberArr = [2, 4, 5];
const simpleNumbersArr = numberArr.map((num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
});

// console.log(simpleNumbersArr);

// ----------------------------Уровень 4 — Сложные и вложенные структуры----------------------------

// 16. Из массива объектов {price: 10, qty: 2} получи массив итоговых сумм по каждому.
// → [20, ...]

const objArray = [
  { price: 10, qty: 2 },
  { price: 20, qty: 4 },
];

const sumArr = objArray.map(({ price, qty }) => price * qty);

// console.log(sumArr);

// 17. Преобразуй массив массивов чисел в массив их сумм.
// [[1, 2], [3, 4]] → [3, 7]

const arrayOfArrays = [
  [1, 2],
  [3, 4],
];
const sum = arrayOfArrays.map((arr) => {
  let s = 0;

  for (const el of arr) {
    s += el;
  }

  return s;
});

// console.log(sum);

// 18. Преобразуй массив строк в массив объектов с полями word и length.
// ["cat", "giraffe"] → [{word: "cat", length: 3}, ...]

const animals = ["cat", "giraffe"];
const animalsObj = animals.map((animal) => ({
  word: animal,
  length: animal.length,
}));

// console.log(animalsObj);

// 19. Сделай инверсию ключ-значение для массива объектов одного уровня.
// [{a: 1}, {b: 2}] → [{1: "a"}, {2: "b"}];

const a = [{ a: 1 }, { b: 2 }];
const inversionArr = a.map((obj) => {
  const keys = Object.keys(obj).join(" ");
  const val = Object.values(obj);

  return { [val]: keys };
});

// console.log(inversionArr);

// 20. Преобразуй массив чисел в объект с ключами even и odd, содержащими строки вида "index:value".
// Используй только map и дополнительные методы.
// [1, 2, 3] → { even: ["1:2"], odd: ["0:1", "2:3"] }

const numbersArr = [1, 2, 3];
const obj = { even: [], odd: [] };

numbersArr.map((n, i) =>
  n % 2 === 0 ? obj.even.push(`${i}:${n}`) : obj.odd.push(`${i}:${n}`)
);

// console.log(obj);
