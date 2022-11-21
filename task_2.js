// Closure example

// function makeAdder(x) {

//   function add(y) {
//     return x + y;
//   };

//   return add;
// }

// let plusOne = makeAdder(1);

// console.log(plusOne(2));

//Classes template
class Person {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.birthYear;
  }

  introducing() {
    alert("My name is " + this.fullName);
    alert("I am " + this.age() + " years old.");
  }
}

class Programmer extends Person {
  constructor(name, surname, birthYear, profession, stack) {
    super(name, surname, birthYear);
    this.profession = profession;
    this.stack = stack;
  }
}
let person = new Programmer("Maryna", "Shyta", 2003, 'Backend Developer', 'PHP');
person.introducing();
person.profession;