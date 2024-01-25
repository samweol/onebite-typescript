/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 * tag로 구분하기때문에 태그드 유니온 타입이라고도 한다.
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> name님 현재까지 kickCount명 강퇴했습니다.
// Member -> name님 현재까지 point 모았습니다.
// Guest -> name님 현재까지 visitCount번 오셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다..`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다..`);
  }
}

// 다른 사람이 코드를 보고 직관적으로 조건을 파악하기 힘들다.

function login1(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다..`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다..`);
  }
}

function login2(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다..`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문했습니다..`
      );
      break;
    }
  }
}

// tag의 타입을 스트링 리터럴 타입으로 정의되면서 기존에 교집합이 있던 세 집합은 교집합이 더이상 존재할 수 없게된다.
// 이게 바로 서로소 유니온 타입이다.

/**
 * 복습 겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 작업

type LoadingTast = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type AsyncTask = LoadingTast | FailedTask | SuccessTask;

// 로딩중 -> 로딩중 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      // 서로온 유니온 타입으로 안하면 옵셔널체이닝(?)이거나 Non Null 선언(!)을 해줘야 오류가 발생안함
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
