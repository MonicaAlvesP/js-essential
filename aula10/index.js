// Objetivo: Entender o que são métodos estáticos e como utilizá-los
// Objetivo 2: Entender a diferença entre métodos de instância e métodos estáticos
// Os metodos estaticos esta mais ligado a classe em si, nao a instancia da classe
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocarPilha() {
    console.log('Pilhas trocadas com sucesso!');
  }

  controleQuebrado() {
    console.log('Controle Remoto esta quebrado!')
  }

}

const controleRemoto1 = new ControleRemoto('LG')
controleRemoto1.aumentarVolume()
controleRemoto1.aumentarVolume()
controleRemoto1.aumentarVolume()
console.log(controleRemoto1)

const controleRemoto2 = new ControleRemoto('Samsung')
controleRemoto2.diminuirVolume()
controleRemoto2.diminuirVolume()
console.log(controleRemoto2)
controleRemoto2.controleQuebrado()

ControleRemoto.trocarPilha()