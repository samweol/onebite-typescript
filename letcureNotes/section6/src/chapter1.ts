/**
 * 타입스크립트의 클래스
 */

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
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
}

const employee: Employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

const employeeB = new Employee("이정환", 27, "developer");
