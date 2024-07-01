/*
  Retorne as pessoas que tem o nome com 5 letras ou mais
  Retorne as pessoas com mais de 50 anos
  Retorne as pessoas cujo nome termina com a
*/

const pessoas = [
  { nome: 'Maria', idade: 56 },
  { nome: 'João', idade: 19 },
  { nome: 'Eduardo', idade: 63 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 },
]

const pessoasComNomeGrande = pessoas.filter(pessoas => pessoas.nome.length > 5)
console.log(pessoasComNomeGrande.map(pessoas => pessoas.nome))
/*
  O código acima está filtrando o array "pessoas" para encontrar
  os nomes que possuem mais de 5 caracteres. 
  Em seguida, ele está mapeando os nomes dessas pessoas filtradas 
  em um novo array chamado "pessoasComNomeGrande". Por fim, o código 
  imprime no console os nomes das pessoas filtradas usando o método map().
 */

const pessoasComMaisde50 = pessoas.filter(pessoas => pessoas.idade > 50)
console.log(pessoasComMaisde50.map(pessoas => pessoas.nome))

const pessoasComNomedeFinalA = pessoas.filter(pessoas => pessoas.nome.toLowerCase().endsWith('a'))
console.log(pessoasComNomedeFinalA.map(pessoas => pessoas.nome))
