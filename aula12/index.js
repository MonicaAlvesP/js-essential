function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) * min);
}

function comprarLeite(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg + ' - Comprei o leite')
    }, tempo)
  })
}

// Promise.all = executa todas as promisses ao mesmo tempo
// Promise.race = executa a promisse que resolver primeiro
// Promise.resolve = retorna a promisse resolvida
// Promise.reject = retorna a promisse rejeitada

const promises = [
  'Indo ao mercado',
  comprarLeite('Primeira vez', 1000),
  comprarLeite('Segunda vez', 2000),
  comprarLeite('Terceira vez', 1000),
  'Outras coisas mais...',
]

Promise.all(promises)
.then(function(valor) {
  console.log(valor)
})
.catch((error) => {
  console.log(error)
})