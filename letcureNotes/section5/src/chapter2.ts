/**
 * 인터페이스 선언 합치기
 */

// 타입 별칭은 같은 스코프 안에서 같은 이름으로 만들면 에러가 발생한다. 하지만 인터페이스는 아니다.
interface Person {
  name: string;
}

interface Person {
  //   name: number; 동일한 프로퍼티인데 프로퍼티의 타입을 다르게 하는 것을 충돌이라고 하는데, 해당 충돌을 허용하지 않는다.
  age: number;
}

interface Developer extends Person {
  name: "hello"; // 확장과 선언 합침의 상황은 다르다
}
// 같은 이름으로 만들면 둘이 합쳐진다.
const person: Person = {
  name: "",
  age: 0,
};

/**
 * 모듈 보강때 사용한다.
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
