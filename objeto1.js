const pessoa = {
  nome: "Daniel",
  idade: 16,
  profissão: "açogueiro",
  país: "Brasil",
};

console.log(pessoa.nome, pessoa.idade);

pessoa.profissão = "vendedor da shopee";
pessoa.email = "danielseya";
delete pessoa.país;

console.log(pessoa);
