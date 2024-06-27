let par = [];
let ímpar = [];
let n = 0;

for (n; n <= 100; n++) {
  if (n % 2 == 0) {
    par.push(n);
  } else ímpar.push(n);
}
console.log(par);
console.log(ímpar);
