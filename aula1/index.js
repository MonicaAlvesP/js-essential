// let a = 'A'
// let b = 'B'
// let c = 'C'

// desestruturação de array
//[a, b, c] = [1, 2, 3]


// desestruturação via atribuição
// const numeros = [1, 2, 3];
// [a, b, c] = numeros;

// const numeros = [1, 2, 3];
// [b, c, a] = numeros;

// console.log(a, b, c)

// ... rest = pega o restante dos elementos do array
// ... spread = espalha os elementos do array

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; // ...resto(rest operator) pega o restante dos elementos do array
// console.log(primeiroNumero, segundoNumero, terceiroNumero)
// console.log(resto)

const numeros = [
  [1, 2, 3], // indice 0
  [4, 5, 6], // indice 1
  [7, 8, 9] // indice 2
];
const [lista1, lista2, lista3] = numeros;
// console.log(numeros[1][2]) acessando a lista 1 e o indice 2 da lista 1
// desestruturação via atribuição de array
console.log(lista2[2]) // acessando a lista 2 e o indice 2 da lista 2