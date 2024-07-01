// Promise.all = executa todas as promisses ao mesmo tempo
// Promise.race = executa a promisse que resolver primeiro
// Promise.resolve = retorna a promisse resolvida
// Promise.reject = retorna a promisse rejeitada

function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) * min);
}

function comprarLivro(livro, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof livro !== 'string'){
        reject('Erro na compra')
        return
      }
      resolve(livro.toLocaleUpperCase() + '- Comprado')
    }, tempo)
  })
}

const promises = [
  // 'Livros',
  comprarLivro("Harry Potter", 2000),
  comprarLivro("A Menina que Roubava Livros", 2000),
  comprarLivro("Matemática Aplicada a Computação", 2000),
  // comprarLivro(1000, 1000),
  // 'Comprei revistas também...'
]

Promise.race(promises)
  .then(function (valor) {
    console.log(valor)
  })
  .catch(function (error) {
    console.log(error)
  })


  function baixaPagina() {
      const emCache = true
  
      if (emCache) {
        return Promise.reject('Página em cache')
      } else {
        return comprarLivro('Baixei a página', 2000)
      }
    }
  
    baixaPagina()
      .then(dadosPagina => console.log(dadosPagina))
      .catch(e => console.log(e))