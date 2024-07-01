// Array Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/*
  Some todos os números (reduce)
  Retorne um array com os pares (filter)
  Retorne um array com o dobro dos valores (map)
*/

// função para somar todos os valores do array
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//   acumulador += valor
//   return acumulador
// }, )
// console.log(total)

// // função para retornar os pares do array
// const pares = numeros.filter(valor => valor % 2 === 0)

// console.log(pares)

// // função para retornar o dobro dos valores do array
// const dobro = numeros.map(valor => valor * 2)
// console.log(dobro)


// Refatorando o código acima
const total = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2)
  return acumulador
}, [])

// console.log(total)

// Retorne a pessoa mais velha

const pessoas = [
  {nome: 'Mariana', idade: 23},
  {nome: 'Carlos', idade: 62},
  {nome: 'Luiz', idade: 14},
  {nome: 'Pedro', idade: 55},
  {nome: 'Fabio', idade: 8},
]

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador
  return valor
})

console.log(pessoaMaisVelha)