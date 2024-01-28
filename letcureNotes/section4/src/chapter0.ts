/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는 지 이야기하기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 기본값과 다른 타입으로 매개변수의 타입을 지정해주면 오류가 발생한다.
 * 함수를 호출할 때 다른 타입의 값인 인수를 넘기면 오류가 발생한다.
 */
function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`name: ${name}`);
  // 타입가드
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

// introduce(1)
introduce("이정환", 26, 175);
introduce("이정환", 26); // 선택적 매개변수로 만들어주면된다.

// 선택적 매개변수는 필수 매개변수보다 앞에 오면 안된다.

/**
 *
 * rest 파라미터 (가변적인 길이의 인수를 전달할 때)
 * 길이를 고정하고싶으면 튜플타입으로 만들면된다.
 */
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((item) => (sum += item));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); //15
