// dobrar o valor de um array
// map sempre retorna o mesmo numero de elementos que o array original

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dobreNumeros = numeros.map(valor => valor * 2)

// console.log(dobreNumeros)


/*
  para cada elemento:
  retorne apenas uma string com o nome da pessoa
  remova apenas a chave nome do objeto
  adicione uma chave id em cada objeto
 */

  const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 22},
    {nome: 'Wallace', idade: 10},
    {nome: 'Joana', idade: 7}
  ]

  const pessoasNome = pessoas.map(obj => obj.nome)
  // console.log(pessoasNome)
/*
  retornaremos um array com somente os nomes de todas as pessoas 
 */

  // const pessoasIdade = pessoas.map(obj => obj.idade)
  const pessoasIdade = pessoas.map(obj => ({idade: obj.idade})) // uma expressão de objeto
  // console.log(pessoasIdade)
/*
  retornaremos um array com somente as idades de todas as pessoas 
 */

  // minha solução
  // const pessoasComId = pessoas.map(function(obj, indice){
  //   return `nome -> ${obj.nome}, id: ${indice + 1}`
  // })
  // console.log(pessoasComId)

  // solução do professor
  const pessoasComId = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
  })
  console.log(pessoasComId)