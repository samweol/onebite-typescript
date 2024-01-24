// 배열
// 1.
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];

// 2. 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 (TS에만 있음)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"];

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["2", true, 1];
tup1.push(1); // 배열 메소드를 사용할 땐 배열의 길이제한이 발동하지 않는다.
tup1.pop();
// 튜플 타입을 사용할 때는 push, pop 사용할 때는 각별히 주의하자!

// 그렇다면 언제 사용할까?
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
];

// 다른 유저가 [5, "최아무개"] 로 저장한다면?
// 튜플타입으로 지정하면 오류가 발생할 것이다.
// 인덱스 번호에 따라 값이 정해져있으면 튜플 타입을 사용하는 것이 좋다.
