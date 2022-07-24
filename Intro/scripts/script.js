function hello() {
  console.log("Hi");
}

function sayHello(name) {
  let lastName = "Ortiz";
  console.log("Hello again, " + name + " " + lastName + "!");
}

function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

function exec1() {
  for (let i = 0; i < 21; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    }
  }

  let name = "";
  if (!name) {
    console.error("Name is required");
  }
}

function exec2() {
  let total = 0;
  let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(numbers[i]);
    total = total + numbers[i];

    if (number < 0) {
      console.log("negatives:", number);
    }
  }
  console.log(total);
}

function init() {
  console.log("intro page!");
  hello();

  let myName = "Mark";
  //access any DOM element
  sayHello(myName);

  let result = sum(21, 21);
  console.log(result);

  exec1();
  exec2();
}
//HACKER RANK

window.onload = init;
