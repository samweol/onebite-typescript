/**
 * 대수 타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합타입, 교집합타입
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
// Dog 집합에 위치
let union1: Union1 = {
  name: "",
  color: "",
};

// Person 집합에 위치
let union2: Union1 = {
  name: "",
  language: "",
};

// 교집합에 위치
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 그 어디에서 포함되지 않음
// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 - Intersection 타입
 */
// 둘의 교집합은? 결국 never 타입 (불가능하기때문, 공집합)
let variable: number & string;

type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
