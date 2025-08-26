// 1. Факториал числа

// Вход: 5
// Выход: 120
// Описание: Вычислить 5! = 5 * 4 * 3 * 2 * 1

function calculateFactorial(number) {
  if (number === 1) return 1;

  return (number *= calculateFactorial(number - 1));
}

// console.log(calculateFactorial(5));

// 2. Числа Фибоначчи

//  Вход: 6
//  Выход: 8
//  Описание: Вернуть 6-е число Фибоначчи (ряд: 0, 1, 1, 2, 3, 5, 8...)

function getFibonacciNum(number) {
  if (number <= 1) return number;

  return getFibonacciNum(number - 1) + getFibonacciNum(number - 2);
}

// console.log(getFibonacciNum(6));

// 3. Сумма элементов массива

//  Вход: [1, 2, 3, 4, 5]
//  Выход: 15
//  Описание: Сложить все элементы массива с помощью рекурсии

function arrSum(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + arrSum(arr.slice(1));
}

// console.log(arrSum([1, 2, 3, 4, 5]));

// 4. Разворот строки

//  Вход: "hello"
//  Выход: "olleh"
//  Описание: Развернуть строку с помощью рекурсии

function recString(string) {
  if (string.length === 0) return "";

  return recString(string.slice(1)) + string[0];
}

// console.log(recString("hello"));

// 5. Проверка палиндрома

//  Вход: "racecar"
//  Выход: true
//  Описание: Проверить, является ли строка палиндромом (читается одинаково в обе стороны)

function isPalindrome(string) {
  if (string.length <= 1) return true;

  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
}

// console.log(isPalindrome("racecar"));

// 6. Преобразование числа в двоичную систему

//  Вход: 13
//  Выход: "1101"
//  Описание: Перевести число в двоичную систему с использованием рекурсии

function getBinary(number) {
  if (number === 0) return "";

  return getBinary(Math.floor(number / 2)) + (number % 2);
}

// console.log(getBinary(13));

// 7. Подсчёт количества элементов в вложенном массиве

//  Вход: [1, [2, [3, 4], 5], 6]
//  Выход: 6
//  Описание: Посчитать общее количество чисел, включая вложенные массивы

function getLength(arr) {
  let count = 0;

  for (const el of arr) {
    if (typeof el === "number") {
      count += 1;
    } else if (Array.isArray(el)) {
      count += getLength(el);
    }
  }

  return count;
}

// console.log(getLength([1, [2, [3, 4], 5], 6]));

// 8. Обход объекта (например, JSON) и сбор всех значений определённого ключа

//  Вход:

// {
//   name: "Alice",
//   details: {
//     age: 25,
//     address: {
//       city: "Paris",
//       name: "Home"
//     }
//   }
// }

//  Выход (по ключу name): ["Alice", "Home"]
//  Описание: Собрать все значения ключа "name" на любом уровне вложенности

const objAlice = {
  name: "Alice",
  details: {
    age: 25,
    address: {
      city: "Paris",
      name: "Home",
    },
  },
};

function getDetails(object) {
  let res = [];

  for (const key in object) {
    if (key === "name") {
      res.push(object[key]);
    } else if (typeof object[key] === "object") {
      res = [...res, ...getDetails(object[key])];
    }
  }

  return res;
}

// console.log(getDetails(objAlice));

// 9. Создание всех комбинаций из массива символов

//  Вход: ['a', 'b', 'c']
//  Выход: ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']
//  Описание: Получить все возможные непустые комбинации символов

function getAllCombination(arr) {
  const res = [];

  function helper(i, current) {
    if (arr.length === i) {
      if (current !== "") {
        res.push(current);
      }

      return;
    }

    helper(i + 1, current + arr[i]);
    helper(i + 1, current);
  }

  helper(0, "");

  return res;
}

// console.log(getAllCombination(["a", "b", "c"]));

// 10. Решение лабиринта (поиск пути в 2D массиве)

//  Вход:

// [
//   [' ', ' ', 'X'],
//   ['X', ' ', 'X'],
//   ['X', ' ', ' ']
// ]

//  Описание: Найти путь из левого верхнего угла в правый нижний, избегая "X" (стен)

function labyrinth(arr) {
  const res = [];

  function rec(x, y) {
    if (x < 0 || y < 0 || x >= arr.length || y >= arr[0].length) return false;

    if (arr[x][y] === "X") return false;

    if (arr[x][y] === "*") return false;

    if (x === arr.length - 1 && y === arr[0].length - 1) {
      return true;
    }

    arr[x][y] = "*";

    if (rec(x + 1, y)) {
      res.push("↓");
      return true;
    }

    if (rec(x, y + 1)) {
      res.push("→");
      return true;
    }

    return false;
  }

  rec(0, 0);

  return res.reverse();
}

console.log(
  labyrinth([
    [" ", " ", "X"],
    ["X", " ", "X"],
    ["X", " ", " "],
  ])
);
