// Classes em javascript

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} esta falando Bom Dia!`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  console.log('Pessoa2 foi chamado');
};

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} esta chamando o método falar`);
}

const p1 = new Pessoa('Mônica', 'Alves')
const p2 = new Pessoa2('Caio Vinícius', 'Alves')

console.log(p1);
console.log(p2);