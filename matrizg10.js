const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];

for (let linha = 0; linha < arr.length; linha++) {
  let coluna1 = linha;
  let coluna2 = arr.length - 1 - linha;
  console.log(arr[linha][coluna1]), arr[linha][coluna2];
}
