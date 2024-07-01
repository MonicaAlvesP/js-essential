// Promisses = promessas de que algo vai acontecer de forma assíncrona

function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAI(msg, tempo) {
//   setTimeout(() =>
//     console.log(msg), tempo)
// }

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject("BAD VALUE")
    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

esperaAi('Conexão com a BD(base de dados)', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando dados daa BASE', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi('Tratando os dados da BASE', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi(222, rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Exibe dados na tela!')
  })

  // CATH = sempre captura o erro
  .catch(e => {
    console.log('ERRO:', e)
  })

console.log('Isso aqui será exibido antes de qualquer promise.')