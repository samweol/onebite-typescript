// object
let user1: object = {
  id: 1,
  name: "이정환",
};

// user1.id; -> 'object' 형식에 id 속성이 없다고 나온다.

// 객체 리터럴 타입
let user2: { id?: number; name: string } = {
  id: 1,
  name: "이정환",
};
user2.id;

let dog: { name: string; color: string } = {
  name: "돌돌이",
  color: "brown",
};

// 구조적 타입 시스템 -> property based type system
// 명목적 타입 시스템 -> 이름을 기준으로

user2 = {
  name: "홍길동",
};
// ?를 붙여서 선택적 프로퍼티로 지정해준다.

let config: { readonly apiKey: string } = {
  apiKey: "dddlkfjadlfkjadlkf",
};
// readonly 를 붙여서 읽기전용 프로퍼티로 만들면된다.
