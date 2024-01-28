// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};
// 프로퍼티가 많아질 수록, 객체를 여러번 정의할 수록 코드의 양이 너무 많아지며 중복코드가 발생한다. -> 이때 타입 별칭을 사용한다.
// 타입별칭은 동일한 스코프에 중복된 이름으로 선언하면 오류가 발생한다.

// 인덱스 시그니처
// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
// };

type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
  //   UnitedState: string;
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

// 프로퍼티가 없더라도 오류가 발생하지 않는다.
// 인덱스 시그니처는 이 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입이다.
// Korea 프로퍼티는 반드시 가지게 작성했으니 오류가 발생한다.
// Korea 프로퍼티를 추가로 작성하는 것처럼 추가로 작성할려면 인덱스 시그니처와의 타입이 일치하거나 호환되어야한다.
// let numberCodes: CountryNumberCodes = {};
