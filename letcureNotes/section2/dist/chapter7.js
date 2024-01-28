// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무 것도 없음을 의미하는 타입
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
function func3() {
    console.log("hello");
    // return undefined;
    return;
}
function func4() {
    console.log("hello");
    return null;
}
let a;
// a = 1;
// a = "";
a = undefined;
// a = null; // strictNullChecks 옵션을 끄면 null도 가능
// never
// never -> 존재하지 않는
// 불가능한 타입
function func5() {
    while (true) { }
}
// void는 함수가 완료되고 반환값이 없는 것
// never는 함수가 완료가 되지 않아서 반환할 수 없는 것
function func6() {
    throw new Error();
}
let b;
export {};
// b = 1;
// b = {};
// b = undefined;
// b = null;
