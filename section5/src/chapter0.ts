/**
 * 인터페이스
 */

// IPerson -> 헝가리안 표기법(JS에선 잘 안씀)
interface Person {
  readonly name: string;
  age?: number;
  //   sayHi: () => void;
  // 메서드의 오버로딩을 쓸꺼면 호출 시그니처로 사용
  sayHi(): void;
  sayHi(a: number, b: number): void;
  sayHello(): void; // 호출 시그니처와의 차이점 확인하기 함수명이있음
} // & string; 불가능

type Type1 = number | string | Person;
type Type2 = number & string & Person;
// 별칭에서만 사용할 수 있음

type Func = {
  (): void;
};

const func: Func = () => {};

const person: Person = {
  name: "이정환",
  age: 27,
  sayHi: function () {
    console.log("hi");
  },
  sayHello: () => {},
};

person.sayHi();
person.sayHi(1, 2);
