//12 -> '10 + 2'
//45 -> '40+5'
//70304 => '70000 + 300 + 4'

function parse(num) {}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };

function combine(...obj) {
  const res = obj.reduce((acc, val) => {
    for (const key in val) {
      return {
        ...acc, 
        acc[key] = 0
      }
    }
  }, {});
}

console.log(combine(objA, objB));
