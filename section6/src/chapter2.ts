/**
 * 접근 제어자
 * access modifier
 * -> public, private, protected
 */

class Employee {
  // 접근제어자의 기본값은 public
  //   public name: string;
  //   private age: number;
  //   protected position: string;

  // 생성자에도 접근제어자를 붙여줄 수 있는데, 생성자에 접근제어자를 달면 자동으로 필드를 만들어주기때문에 이때 필드를 작성할 필요가 없다.
  constructor(
    public name: string,
    private age: number,
    protected position: string
  ) {
    // + 필드의 값 초기화도 자동으로 해준다.
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  work() {
    console.log("열심히 일함");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); // TS에선 생략하면 오류가 발생한다.
    this.officeNumber = officeNumber;
  }

  func() {
    // console.log(this.age); 파생 클래스에서 조차 접근할 수 없다.
    console.log(this.position); // 파생클래스에서 접근 가능
  }
}

const employee = new Employee("이정환", 27, "developer");

employee.name = "홍길동";
// employee.age = 30; private이 되면 읽지도 쓰지도 못한다. 클래스 내부에서만 접근가능하다.
// employee.position = "designer"; protected는 외부에서 접근 할 수 없지만 내부에서는 접근가능하다(파생클래스도)
