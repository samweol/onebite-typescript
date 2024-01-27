/**
 * 제네릭 인터페이스 & 제네릭 타입 별칭
 */

// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 함수와 다르게 사용할 때 타입을 먼저 할당해줘야한다.
let keyPair: KeyPair<string, number> = {
  key: "1",
  value: 1,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2"],
};

// 객체의 인덱스 시그니처 + 제너럴 인터페이스
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let numberMap2: Map<string> = {
  key: "value",
};

let numberMap3: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
};

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
