/**
 * 함수 타입 표현식
 */
// const add = (a: number, b: number): number => a + b;

type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const add2: (a: number, b: number) => number = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;
const multiple: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

function func(a: number): void {}
// 이 부분을 뜯어서 사용하면 호출 시그니처처럼 생겼다.
// 사실 함수도 객체이기때문에 이렇게 작성하기도한다.

const add3: Operation2 = (a, b) => a + b;
const sub3: Operation2 = (a, b) => a - b;
const multiple3: Operation2 = (a, b) => a * b;
const divide3: Operation2 = (a, b) => a / b;

add2.name;
