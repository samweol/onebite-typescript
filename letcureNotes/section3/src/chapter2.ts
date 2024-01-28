/**
 * Unknown 타입
 * 전체집합, 모든 타입들의 슈퍼타입
 */

function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅
  let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let boll: boolean = unknownVar;
}

/**
 * Never 타입
 * 모든 타입의 서브타입, 모든 집합의 부분집합 -> 공집합
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // 업캐스팅과 똑같은 것
  }
  // undefined의 슈퍼타입이라는 걸 주의하자!
  let voidVar: void = undefined;
}

/**
 * Any 타입
 * 치트키라서 모든 타입의 슈퍼타입일수도있고, never를 제외한 모든 타입의 서브타입일 수도 있다.
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운캐스팅이지만 any가 치트키라서 가능함.
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 이 다운캐스팅은 안된다. 왜냐면 never타입은 정말 순수한 공집합이기때문에 any타입이라고 하더라도 여기선 다운캐스팅은 안된다.
  //   neverVar = anyVar;
}
