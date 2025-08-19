// Задачи на использование Array.prototype.reduce()

// Вернуть массив уникальных тегов

const tweets = [
  { id: "0", tags: ["js", "node"] },
  { id: "1", tags: ["html", "css"] },
  { id: "2", tags: ["html", "js", "nodejs"] },
  { id: "3", tags: ["css", "react"] },
  { id: "4", tags: ["js", "nodejs", "react"] },
];

const allUniqueTags = tweets.reduce((all, obj) => {
  obj.tags.forEach((tag) => {
    if (!all.includes(tag)) {
      return (all = [...all, tag]);
    }

    return all;
  });

  return all;
}, []);

const allTags = tweets.reduce((all, obj) => [...all, ...obj.tags], []);

// Вернуть объект статистики по тегам

const statsTag = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

// console.log(statsTag);

// Простые задачи

// 1. Сумма всех чисел в массиве
// Вход: [1, 2, 3, 4, 5]
// Ожидаемый результат: 15

const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = numbers.reduce((total, number) => total + number, 0);

// console.log(sumOfNumbers);

// 2. Произведение всех чисел в массиве
// Вход: [1, 2, 3, 4]
// Ожидаемый результат: 24

const numb = [1, 2, 3, 4];
const prod = numb.reduce((total, number) => total * number, 1);

// console.log(prod);

// 3. Нахождение максимального значения
// Вход: [3, 7, 2, 9, 4]
// Ожидаемый результат: 9

const numbers3 = [3, 7, 2, 9, 4];
const max = numbers3.reduce((max, number) =>
  max > number ? max : (max = number)
);

// console.log(max);

// 4. Нахождение минимального значения
// Вход: [10, -3, 22, 5]
// Ожидаемый результат: -3

const numbers4 = [10, -3, 22, 5];
const min = numbers4.reduce((max, number) =>
  max > number ? (max = number) : max
);

// console.log(min);

// 5. Объединение массива строк в одно предложение
// Вход: ["Hello", "world", "!"]
// Ожидаемый результат: "Hello world !"

const wordsArray = ["Hello", "world", "!"];
const str = wordsArray.reduce((res, word) => {
  if (res === "") return res + word;

  return res + ` ${word}`;
}, "");

// console.log(str);

//  Средние задачи

// 6. Подсчет количества каждого элемента в массиве
// Вход: ["apple", "banana", "apple", "orange", "banana"]
// Ожидаемый результат: { apple: 2, banana: 2, orange: 1 }

const fruitArray = ["apple", "banana", "apple", "orange", "banana"];
const stats = fruitArray.reduce((acc, fruit) => {
  // if (acc[fruit]) {
  //   return {
  //     ...acc,
  //     [fruit]: acc[fruit] + 1,
  //   };
  // }

  // return {
  //   ...acc,
  //   [fruit]: 1,
  // };

  return {
    ...acc,
    [fruit]: acc[fruit] ? acc[fruit] + 1 : 1,
  };
}, {});

// console.log(stats);

// 7. Фильтрация и подсчет суммы положительных чисел
// Вход: [5, -1, 2, -10, 3]
// Ожидаемый результат: 10

const numbers7 = [5, -1, 2, -10, 3];
const positiveSum = numbers7.reduce(
  (total, number) => (number > 0 ? total + number : total),
  0
);

// console.log(positiveSum);

// 8. Подсчет общего количества символов в массиве строк
// Вход: ["JS", "is", "fun"]
// Ожидаемый результат: 7

const stringsArray = ["JS", "is", "fun"];
const totalSymbols = stringsArray.reduce((total, el) => total + el.length, 0);

// console.log(totalSymbols);

// 9. Создание объекта из массива пар [ключ, значение]
// Вход: [["a", 1], ["b", 2], ["c", 3]]
// Ожидаемый результат: { a: 1, b: 2, c: 3 }

const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const obj = arr.reduce((acc, el) => {
  return {
    ...acc,
    [el[0]]: el[1],
  };
}, {});

// console.log(obj);

// 10. Подсчет суммы значений по определенному полю объектов
// Вход: [{age: 20}, {age: 35}, {age: 45}]
// Ожидаемый результат: 100

const arrayOfAges = [{ age: 20 }, { age: 35 }, { age: 45 }];
const result = arrayOfAges.reduce((total, obj) => total + obj.age, 0);

// console.log(result);

//  Продвинутые задачи

// 11. Группировка объектов по значению поля
// Вход: [{type: "fruit", name: "apple"}, {type: "vegetable", name: "carrot"}, {type: "fruit", name: "banana"}]
// Ожидаемый результат:

// {
//   fruit: [{type: "fruit", name: "apple"}, {type: "fruit", name: "banana"}],
//   vegetable: [{type: "vegetable", name: "carrot"}]
// }

const arrayOfFruits = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const fruitStats = arrayOfFruits.reduce((acc, item) => {
  if (!acc[item.type]) {
    return {
      ...acc,
      [item.type]: [...[item]],
    };
  }

  return {
    ...acc,
    [item.type]: [...acc[item.type], item],
  };
}, {});

// console.log(fruitStats);

// 12. Преобразование массива в объект, где ключи — id
// Вход: [{id: 1, name: "John"}, {id: 2, name: "Jane"}]
// Ожидаемый результат:
// {
//   1: {id: 1, name: "John"},
//   2: {id: 2, name: "Jane"}
// }

const arrayOfNames = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const objOfNames = arrayOfNames.reduce((acc, item) => {
  return {
    ...acc,
    [item.id]: item,
  };
}, {});

// console.log(objOfNames);

// 13. Удаление дубликатов без использования Set
// Вход: [1, 2, 2, 3, 4, 4, 5]
// Ожидаемый результат: [1, 2, 3, 4, 5]

const numbers13 = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers13.reduce((acc, number) => {
  // if (!acc.includes(number)) {
  //   return [...acc, number];
  // }

  // return acc;

  return acc.includes(number) ? acc : [...acc, number];
}, []);

// console.log(uniqueNumbers);

// 14. Построение строки из массива чисел через запятую, пропуская отрицательные
// Вход: [1, -2, 3, -4, 5]
// Ожидаемый результат: "1,3,5"

const numbers14 = [1, -2, 3, -4, 5];
// const resString = numbers14
//   .reduce((str, num) => (num < 0 ? str : str + `,${num}`), "")
//   .slice(1);

const resString = numbers14.reduce(
  (str, num) => (num < 0 ? str : str === "" ? str + num : str + `,${num}`),
  ""
);
// console.log(resString);

// 15. Преобразование массива строк в объект, где ключ — первая буква
// Вход: ["apple", "banana", "apricot", "blueberry"]
// Ожидаемый результат:

// {
//   a: ["apple", "apricot"],
//   b: ["banana", "blueberry"]
// }

const arrayOfStrings = ["apple", "banana", "apricot", "blueberry"];
const res15 = arrayOfStrings.reduce((acc, str) => {
  const key = str[0];

  // if (!acc[key]) {
  //   return { ...acc, [key]: [str] };
  // }

  // return { ...acc, [key]: [...acc[key], str] };

  return {
    ...acc,
    [key]: acc[key] ? [...acc[key], str] : [str],
  };
}, {});

// console.log(res15);

//  Сложные задачи

// 16. Формирование вложенного объекта по массиву путей
// Вход: [['a'], ['b', 'c'], ['b', 'd']]
// Ожидаемый результат:

// {
//   a: {},
//   b: {
//     c: {},
//     d: {}
//   }
// }

const a = [["a"], ["b", "c"], ["b", "d"]];
const result16 = a.reduce(() => {}, {});

// console.log(result16);

// 17. Создание обратного индекса по полю
// Вход:

// [
//   {id: 1, tags: ["a", "b"]},
//   {id: 2, tags: ["b", "c"]}
// ]

// Ожидаемый результат:

// {
//   a: [1],
//   b: [1, 2],
//   c: [2]
// }

const arr17 = [
  { id: 1, tags: ["a", "b"] },
  { id: 2, tags: ["b", "c"] },
];

const res17 = arr17.reduce((acc, obj) => {
  const { tags, id } = obj;

  tags.forEach((val) => {
    if (!acc[val]) {
      acc[val] = [id];
    } else {
      acc[val] = [...acc[val], id];
    }
  });

  return acc;
}, {});

// console.log(res17);

// 18. Подсчет общего количества определенного свойства в древовидной структуре
// Вход:

// [
//   {name: "folder1", size: 10, children: [{name: "file1", size: 5}]},
//   {name: "folder2", size: 7}
// ]

// Ожидаемый результат: 22

const arr18 = [
  { name: "folder1", size: 10, children: [{ name: "file1", size: 5 }] },
  { name: "folder2", size: 7 },
];

// const res18 = arr18.reduce((total, obj) => {
//   if (obj.children) {
//     const innerSize = obj.children.reduce((total, obj) => total + obj.size, 0);

//     return total + obj.size + innerSize;
//   }

//   return total + obj.size;
// }, 0);

function calculateSize(arr) {
  return arr.reduce((total, obj) => {
    let sum = 0 || obj.size;

    if (obj.children) {
      sum += calculateSize(obj.children);
    }

    return total + sum;
  }, 0);
}

// console.log(calculateSize(arr18));

// 19. Объединение массивов внутри объектов по ключу
// Вход:

// [
//   {group: "A", items: [1, 2]},
//   {group: "B", items: [3]},
//   {group: "A", items: [4]}
// ]

// Ожидаемый результат:

// {
//   A: [1, 2, 4],
//   B: [3]
// }

const arr19 = [
  { group: "A", items: [1, 2] },
  { group: "B", items: [3] },
  { group: "A", items: [4] },
];

const res19 = arr19.reduce((acc, obj) => {
  const key = obj.group;

  if (acc[key]) {
    return {
      ...acc,
      [key]: [...acc[key], ...obj.items],
    };
  }

  return {
    ...acc,
    [key]: [...obj.items],
  };
}, {});

// console.log(res19);

// 20. Построение HTML-строки из массива объектов
// Вход:

// [
//   {tag: "p", content: "Hello"},
//   {tag: "div", content: "World"}
// ]

// Ожидаемый результат:
// "<p>Hello</p><div>World</div>"

const arr20 = [
  { tag: "p", content: "Hello" },
  { tag: "div", content: "World" },
];

const res20 = arr20.reduce((acc, obj) => {
  return acc + `<${obj.tag}>${obj.content}</${obj.tag}>`;
}, "");

// console.log(res20);
