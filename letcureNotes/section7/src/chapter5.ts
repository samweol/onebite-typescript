/**
 * 프로미스와 제네릭
 */

// 타입선언을 안하면 unknown 타입이 기본
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("~~때문에 실패");
  }, 3000);
});

promise
  .then((response) => {
    console.log(response * 10);
  })
  .catch((err) => {
    // 보통은 타입 좁히기를 사용 -> any로 넘어오기때문
    if (typeof err === "string") {
      console.error(err);
    }
  });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// function fetchPost(): Promise<Post> -> 추천, 가독성이 좋고 함수에 대해 바로 확인가능하기때문 (협업의 관점)
// return new Promsie<Post>
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
