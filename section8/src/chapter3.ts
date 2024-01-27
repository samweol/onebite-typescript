/**
 * 맵드 타입
 * 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드타입은 인터페이스로 안됨
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

const user = fetchUser();

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

updateUser({
  age: 25,
});
