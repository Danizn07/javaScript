const arr = [];

arr.push(1, 2, 3, 4, 5);
console.log("lista", arr, "tamanho da lista:", arr.length);
let a1 = arr.pop();
let a2 = arr.pop();
let a4 = arr.pop();

const ultimo = [a1, a2, a4];
console.log("numeros removidos:", ultimo);
