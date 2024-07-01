// declaração de função(function hoisting)

saudacao();
function saudacao() {
  console.log('Bom dia!');
}

// first-class objects (objetos de primeira classe)
// function expression

const soma = function(a, b) {
  return a + b;
}

console.log(soma(2, 3));

function executaFuncao(funcao) {
  console.log('Executando a função passada como parâmetro');
  funcao();
}

executaFuncao(saudacao);

// arrow function
const subtracao = (a, b) => {
  console.log('Executando a função de subtração de uma arrow function');
  return a - b;
}

console.log(subtracao(5, 3));

// callback function = função de callback
setTimeout(function() {
  console.log("Executando uma função de callback com o setTimeout");
}, 5000);

// setInterval(function() {
//   console.log("Executando uma função de callback com o setInterval");
// }, 1000);

// Dentro de um objeto pode ter uma função

const pessoa = {
  nome: 'Mônica',
  idade: 29,
  Falar: function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }
}

pessoa.Falar();