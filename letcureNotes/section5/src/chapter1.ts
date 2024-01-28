/**
 * 인터페이스 확장하기 (상속)
 * (타입 별칭에선 없고 인터페이스에만 있는 기능)
 */

type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  // Animal이 타입별칭이였다고 해도 확장할 수 있다.
  name: "Hello"; // 상속받은 프로퍼티에 대해 재정의할 수 있다. 그렇다고 아무타입으로 정의할 수 없고, 원본타입의 서브타입인 경우만 가능
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "Hello",
  age: 0,
  isBark: true,
};

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "Hello",
  age: 0,
  isBark: false,
  isScratch: false,
};
