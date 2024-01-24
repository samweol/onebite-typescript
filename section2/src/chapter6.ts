// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// tsx로 실행시키면 오류가 발생한다. 왜냐면 마지막 함수에서 실행할 수 있는 메서드가 아니다. 즉 런타임에 에러가 발생한다.
// any 최대한 사용하지 않는 것이 좋다.

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// unknownVar.toUpperCase();

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}
