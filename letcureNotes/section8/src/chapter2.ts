/**
 * keyof 연산자
 * 객체타입에 적용하는 연산자로, 특정 객체 타입으로부터 프로퍼티 키들을 스트링 유니언 타입으로 추출하는 연산자
 */

interface Person {
  name: string;
  age: number;
}

// keyof 연산자 뒤에 반드시 타입이 와야한다.
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name");

typeof person === "object";
// 타입을 정의할 때 사용하면 동작이 달라진다.
type Person1 = typeof person;
// 어떤 객체의 타입을 뽑아내준다.
