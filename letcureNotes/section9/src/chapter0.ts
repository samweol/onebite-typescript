/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // false -> number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // true -> number

// 제네릭과 함께 써야 위력이 발휘된다.

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwtich<T> = T extends number ? string : number;

let varA: StringNumberSwtich<number>; // type = string이 된다.
let varB: StringNumberSwtich<string>; // type = number이 된다.

function removeSpaces(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
result?.toUpperCase();

// 조건부 + 제네릭 + 오버로딩
function removeSpaces1<T>(text: T): T extends string ? string : undefined;
function removeSpaces1<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result1 = removeSpaces1("hi im winterlood");
let result2 = removeSpaces1(undefined);
