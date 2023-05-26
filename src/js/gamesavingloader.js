import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((arb) => {
        resolve(json(arb));
      }).catch(() => reject(new Error('ОШИБКА')));
    });
  }
}

//  (async () => {
//     const a = await GameSavingLoader.load()
//     console.log(a)
// })()
// GameSavingLoader.load().then((saving) => {
//   console.log(saving)
// })

// static load() {
//   return new Promise((saving, reject) => {
//     read().then((bufferview) => json(bufferview))
//       .then((data) => {
//         saving(data);
//       }) ;
//   });
// }
