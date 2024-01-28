/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};
type Animal = Dog | Cat;

// 함수가 참이면 Dog 타입이겠구나라고 알아먹는 것
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

// 서로소 유니온을 사용할 수 없을 때 (라이브러리를 쓰는 경우)
function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
