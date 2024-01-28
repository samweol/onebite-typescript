/**
 * 타입 추론
 */

// 점진적 타입 시스템
let a: number = 10;
let b = 10;

// 1. 일반적인 변수를 선언하는 상황 -> 변수의 초기값을 기준으로 타입을 추론한다.
let num = 10;
let str = "Hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// 2. 함수의 경우
function func(hello = "hello") {
  return "hello";
}

// 3. 당황스러운 상황
let d; // 암묵적 any로 추론됨 근데 명시적으로 any타입이라고 하면 계속 any타입임. 진화하지않음
d = 10;
d.toFixed(); // 이때는 Number 타입으로 추론된다. 아래 코드와 상관없이 이때는 계속 Number 타입으로 추론된다.

d = "hello";
d.toUpperCase(); // 이번에는 string 타입으로 추론된다.

// -> any 타입의 진화
// 순서대로 암묵적 any타입 -> number로 진화 -> string 진화

// 4. const
const num1 = 10; // 타입이 넘버 리터럴 타입으로 추론된다.
const str1 = "hello";

let arr = [10, "hello"];

// 타입 넓히기  : 타입을 넓혀서 범용적으로 변수를 사용할 수 있게 넓힌다.
