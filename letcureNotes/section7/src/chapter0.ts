/**
 * 제네릭
 * 제네릭 : 일반적인, 포괄적인
 * 제네럴 : (종합병원)
 * -> 모든 타입에 두루두루 쓸 수 있는 범용적인 (함수계의 종합병원이라고 생각하자)
 */

// 제네릭 함수
// 함수의 인수 타입에 따라 반환값의 타입을 가변적으로 이용 가능
// T : 타입을 저장하는 타입 변수
function func<T>(value: T): T {
  return value;
}

// 인수의 타입이 다양하려면?
// 1. any 사용하기
// 2. unknown 사용하기 (특정 타입의 메서드를 사용했다가 오류가 발생함)
let number = func(10);
let bool = func(true);

// 개발자가 타입을 특정할 수 있다.
let arr = func<[number, number, number]>([1, 2, 3]);
