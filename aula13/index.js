function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function esperePor(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('CAI NO ERRO');
      return;
    }

    setTimeout(() => {
      resolve(msg.toLocaleUpperCase() + ' - Passei na promise');
    }, tempo);
  });
}

// esperePor('Fase 1', rand())
//   .then(valor => {
//     console.log(valor);
//     return esperePor('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperePor('Fase 3', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na fase:', fase);
//   })
//   .catch(e => console.log(e));

async function executa() {
  try {
    const fase1 = await esperePor('Fase 1', rand());
    console.log(fase1);

    const fase2 = await esperePor(2, rand());
    console.log(fase2);

    const fase3 = await esperePor('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
  }
  catch (e) {
    console.log(e);
  }
}

executa();

// estados da promise
// pending -> pendente
// fulfilled -> resolvida
// rejected -> rejeitada