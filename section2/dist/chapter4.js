let user = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
export {};
// 프로퍼티가 없더라도 오류가 발생하지 않는다.
// 인덱스 시그니처는 이 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입이다.
// Korea 프로퍼티는 반드시 가지게 작성했으니 오류가 발생한다.
// Korea 프로퍼티를 추가로 작성하는 것처럼 추가로 작성할려면 인덱스 시그니처와의 타입이 일치하거나 호환되어야한다.
// let numberCodes: CountryNumberCodes = {};
