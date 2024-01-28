/**
 * Pick<T, K>
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입이다.
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// in 연산자 뒤에오는 값은 어떤 키가 있는 지 나열하기 위해서 스트링 타입으로 만든 유니온 타입이 들어온다고 했다.
// extends keyof T 를 작성해주지 않았다면 K에 들어올 수 있는 값이 제한되지 않아 오류가 발생한다.
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};

/**
 * Omit<T, K>
 * Pick 타입과 반대로 객체 타입으로부터 특정 프로퍼티를 제거하는 타입이다.
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * 객체 타입을 정의할 때 익데스 시그니처처럼 사용하지만 좀 더 제한적인 정의 방법
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  meidum: {
    url: string;
  };
  small: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "meidum" | "small" | "watch",
  { url: string; size: number }
>;
