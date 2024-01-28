/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 말한다.
 */

// value -> number : toFixed
// value -> string : toUpperCase
// value -> Data : getTime
// value -> Person : name은 age 살입니다.

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  value;
  // value.toUpperCase();
  // value.toFixed();
  // 타입 가드 : 타입좁히기를 하기 위한 방법 (typeof, instanceof, in)
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // console.log(value.getTime()); // typeof null ==== object가 되기때문에 오류가 발생함 -> object로 했을 때
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value instanceof Person 오류 발생
    // instanceof 우측에 타입이 들어오면 안된다. 클래스만 가능
    // 'age' in value 오류발생 in 뒤에는 null이면 안되기때문.
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
}
