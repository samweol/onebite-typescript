/**
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * 자바스크립트에서는 지원이 안되고 타입스크립트에서만 지원이 된다.
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> 1. 매개변수가 1개 -> 매개변수에 20을 곱한 값 출력
 * -> 2. 매개변수가 3개 -> 매개변수의 총합
 */

// 오버로딩을 하기 위해서 함수에 어떤 버전들이 있는지말해줘야한다.
// -> 선언식만 작성한 걸 오버로드 시그니처라고 부른다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처라고 부른다.
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);
