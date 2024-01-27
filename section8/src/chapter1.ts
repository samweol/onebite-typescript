/**
 * 인덱스드 엑세스 타입
 * index라는 것을 이용해서 다른 타입내에 특정 프로퍼티의 타입을 추출하는 타입이다. (객체, 튜플, 배열에 사용)
 */

// 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

// 인덱스 엑세스 타입에 들어가는 값은 문자열이 아니라 타입이라는 것을 주의하자!!!!!!
// Post["author"]["id"] 처럼 중첩으로도 사용할 수 있다.
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

// 인터페이스는 객체 타입을 정의하기에 맞춤이기때문에 타입 별칭으로 배열 타입을 지정해준 것이다.
const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

printAuthorInfo(post.author);

// 배열
type PostList = Post[];
function printAuthorInfo1(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

// 배열타입으로부터 하나의 요소만 가져온다라고 생각하면된다.
// number 타입이나 (어떤)숫자를 넣어도된다.
// 물론 이 숫자도 값이 아니라 타입이다.
const post1: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

// 튜플
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number]; // 최적의 공통타입을 뽑아온다.
