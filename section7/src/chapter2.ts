/**
 * map, forEach 메서드 타입 정의하기
 */

// map
const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (item) => item * 2);
// map(["hi", "hello"], (item) => item.toUpperCase());
map(["hi", "hello"], (item) => parseInt(item));

/**
 * forEach
 */
function forEach<T>(arr: T[], callback: (item: T) => void) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
}

forEach(arr, (item) => item * 2);
