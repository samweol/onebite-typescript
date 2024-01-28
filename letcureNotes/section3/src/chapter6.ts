/**
 * 타입 단언 (type assertion)
 */
type Person = {
  name: string;
  age: number;
};
// let person: Person = {};
// let person = {};
let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", // 추가 프로퍼티 검사 발동
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 다중단언, 절대로 좋은 방법아님

/**
 * const 단언
 */
let num4 = 10 as const; // const로 선언한 것처럼 만들어준다.

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티가 reaonly가 된다.

/**
 * Non Null 단언
 * 어떤 값이 Null이나 undefined가 아니라고 알려주는 것
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// const len: number = post.author?.length; //? : 옵셔널 체이닝
const len: number = post.author!.length; // !: Non Null 단언
