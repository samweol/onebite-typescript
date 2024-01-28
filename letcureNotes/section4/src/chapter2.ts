/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단한다.
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 */

// 기준 1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 반환값 타인 기준으로 업캐스팅
// b = a; 반환값 타입 기준으로 다운캐스팅

// 기준 2. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};
// c = d; // 업캐스팅인데 왜 안될까? 매개변수의 타입으로 평가할 때는 업캐스팅일 때 안된다고 한다!
d = c; // 다운캐스팅, 매개변수를 평가할 땐 다운캐스팅일때 된다.

// 왜 안되는지 아래 코드를 보면 이해할 수 있음
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color);
};

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 매개변수 2개 <- 매개변수 1개
// func2 = func1; // 매개변수 1개 <- 매개변수 2개
