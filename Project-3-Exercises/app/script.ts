// Exercise 1

let names: string;
let speed: number = 25;
let isLoading: boolean;
let age: number | string;

// Exercise 2

let colors: string[] = [];
colors.push("red");
console.log(colors);

let infos: (string | number | boolean)[] = [];
infos.push("dupont", true, 40);

// Exercise 3

let member: object = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
// console.log(member.age);

// Exercise 4

let member2: {
  firstName: string;
  age: number;
  isLoading: boolean;
} = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
console.log(member2.age);

// Exercise 5

let member3 = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
console.log(member3.age);

// Exercise 6
let member4: object = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
member4 = [];

// Exercise 7
let infos2: [string, number];
