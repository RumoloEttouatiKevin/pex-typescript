//! array
let colors: string[] = ["red", "blue", "green", "orange"];

let colors2: Array<string> = ["red", "blue", "green", "orange"];

let numbers: number[] = [1, 5, 7.5, 0];

let values: any[] = [1, true, "Bonjour", { id: 285328, number: true, hobbies: ["hello"] }];

let strNumArray: (string | number)[] = ["red", 9];

//! tuple
let x: [string, number];
x = ["Hello", 20];
// x = [20, "Hello"];
// x = ["Hello", 20, "Bonjour"];
x.push("Bonjour");
// x[2] = "Bienvenue";

const member: {
  level: [string, number];
} = {
  level: ["admin", 1],
};

member.level[0] = "moderator";

//! object
let car: {
  color: string;
  date: number;
  speed: number;
} = {
  color: "red",
  date: 2020,
  speed: 500,
};

let car2: object = {
  color: "red",
  date: 2020,
  speed: 500,
};
// car2.color = "orange";
