const pessoa = {
  nome: 'Mônica',
  sobrenome: 'Alves',
  idade: 29,
  endereco: {
    // rua: 'Rua Ivo de Oliveira',
    numero: 332
  }
}
// const nome = pessoa.nome

// atribuição via desestruturação
// const { nome, sobrenome, idade} = pessoa
const { nome, sobrenome, idade} = pessoa
console.log(`Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`)

const { endereco: { rua: r = 'Samambaia', numero } } = pessoa
console.log(`Moro na ${r}, número ${numero}`)