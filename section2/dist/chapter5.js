// 열거형 타입, Enum Type
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// TS 에만 있음
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// 숫자를 직접 할당하지 않아도 순서대로 0부터 들어간다.
// 10번부터 시작하면 맨 위의 멤버에만 10을 넣어주면 된다. 한마디로 시작 숫자를 정해주면 그 이후는 자동으로 1씩 더해져서 들어간다.
// 만약 중간에 숫자를 10으로 넣으면 0, 10 , 11 순으로 자동으로 들어간다.
// 값에 따라 숫자형이넘, 문자열이넘 등이 될 수있다.
// 이넘은 컴파일 결과 사라지지 않고 자바스크립트의 객체로 변환된다.
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0번은 관리자다
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1번은 일반유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2번은 게스트
};
export {};
// 0, 1, 2 가 각각 어떤 role 이였는지 까먹을 수도 있다.
// 이때 enum을 사용하면 실수를 막을 수 있다.
