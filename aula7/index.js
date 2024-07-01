// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const somaDePares = numeros.reduce((acumulador, valor) => {
//   return valor % 2 === 0 ? acumulador + valor * 2 : acumulador;
// }, 0)

// console.log(`A soma do dobro dos números pares é: ${somaDePares}`)
// // console.log(numeros.filter(valor => valor % 2 === 0))
// // console.log(numeros.map(valor => valor * 2))


const somaDePares = numeros
.filter(valor => valor % 2 === 0) 
.map(valor => valor * 2) 
.reduce((acumulador, valor) => acumulador + valor)

console.log(`A soma do dobro dos números pares é: ${somaDePares}`)