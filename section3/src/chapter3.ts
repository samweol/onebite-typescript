/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅

/**
 * 객체 타입간의 호환성
 * 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brwon",
  breed: "진도",
};

animal = dog;
// dog = animal; -> Animal 타입이 Dog 타입의 슈퍼타입이라는 것이다.
// 프로퍼티를 기준으로 관계를 가진다.
// 추가 프로퍼티가 없는 조건이 더 적은 타입이 슈퍼타입이 된다.

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react",
};

book = programmingBook; // 업캐스팅
// programmingBook = book; // 다운캐스팅

/**
 * 초과 프로퍼티 검사
 * 초기화할때 작성해놓지 않은  프로퍼티를 작성하면 안되게 하는 검사를 한다.

 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
};
// 초기화할때 넣으려고 하니까 에러가 발생함 (사실 둘이 똑같은 코드임 근데 왜 안됨?) -> 초과 프로퍼티 검사를 하기때문

//  * 초기 프로퍼티 검사를 피할려면
let book3: Book = programmingBook;
function func(book: Book) {
  // 초기 프로퍼티 검사 발동
  // func({ name: "한 입 크기로 잘라먹는 리액트",
  // price: 33000,
  // skill: "reactjs",});

  // 변수에 저장해두었다가 전달해야함
  func(programmingBook);
}
