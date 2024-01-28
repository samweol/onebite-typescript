/**
 * infer - 조건부 타입 내에서 타입 추론하기
 * 조건부 타입에서 특정 타입을 추론하는 방법
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // true -> string
type B = ReturnType<FuncB>; // false -> never -> 근데 사실 반환값의 타입만 가져오길 바랬는데, 원하는 대로 되지않았다. 조건문의 비교하는 타입이 string으로 고정되어있어서 결론적으로 원하는 바가 아니다.

type ReturnType1<T> = T extends () => infer R ? R : never;
type A1 = ReturnType1<FuncA>;
type B1 = ReturnType1<FuncB>;
// 조건식을 참으로 만다는 타입으로 R으로 추론한다.

type C = ReturnType1<number>; // 도저히 이 타입이 참으로 만들 R이 없다. -> 추론이 불가능해서 false로 판별

/**
 * 예제
 */
type PromiseUnPack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnPack<Promise<number>>; // number
