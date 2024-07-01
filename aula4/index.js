// Função filter, map e reduce


// Filter é um metodo que retorna um novo array com base em uma condição
// O filter não altera o array original, ele retorna um novo array 
// com os elementos que passaram na condição,
// e retorna a mesma quantidade de elementos ou menos

// 1 - Retorne numeros maiores que 10

// const numerosFiltrados = numeros.filter(function(valor){
//   return valor > 10;
// }) // Este exemplo é mais ultilizado em funções de callback


// const numerosFiltrados = numeros.filter((valor) => valor > 10) função de callback mais curta.

const numeros = [10, 5, 2, 30, 34, 3, 7, 8, 18, 20, 1, 0, 15];
const numerosMaiores = numeros.filter((numeros) =>  numeros > 10); // uma funcao de callback
console.log(numerosMaiores);
