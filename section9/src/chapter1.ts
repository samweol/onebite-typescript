/**
 * 분산적인 조건부 타입
 * 조건부 타입을 유니온과 함게 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법을 말한다.
 */

type StringNumberSwtich<T> = T extends number ? string : number;

// 분산적인 조건적 타입을 만든 방법 -> 대괄호만 넣어주면 분산안됨
type StringNumberSwtich1<T> = [T] extends [number] ? string : number;

let a: StringNumberSwtich<number>;
let b: StringNumberSwtich<string>;

//
let c: StringNumberSwtich<number | string>; // 조건부 타입에 타입변수로 유니온 타입을 할당하면 일반적인 조건부 타입이 아니라 분산적인 조건부 타입으로 업그레이드 되기때문, -> 동작 방식이 바뀜
// 두개가 분리되어서 들어간다. StringNumberSwtich<number>, StringNumberSwtich<string>
// 그리고 분리된 결과를 다시 유니온으로 묶어서 반환된다고 생각하면 된다.

let d: StringNumberSwtich<boolean | number | string>;
// 1 단계
// StringNumberSwtich<boolean>
// StringNumberSwtich<number>
// StringNumberSwtich<string>

// 2단계
// number
// string
// number

// 3단계
// number | string | number -> number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 3단계
// number | never | boolean -> never는 사라짐. 집합으로 생각해보면 유니온 타입은 합집합인데 never는 공집합인데 다른 집합과 합집합한다는 것은 그냥 원본집합이다. 그러니 즉 -> number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
