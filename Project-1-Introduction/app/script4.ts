// const sum = (val1, val2) => {
//   if ("number" === typeof val1 && "number" === typeof val2) {
//     return val1 + val2;
//   } else {
//     throw new Error("Impossible d'effectuer le calcul.");
//   }
// };

const sum = (val1: number, val2: number) => {
  return val1 + val2;
};

sum(20, 15);
