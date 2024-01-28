/**
 * 템플릿 리터럴 타입
 * 스트링 리터럴 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// 좋지 못한 방법 -> 템프릿 리터럴 타입사용
// type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-cat";

type ColoredAnimal = `${Color}-${Animal}`;
