import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((saving) => {
      read().then((bufferview) => json(bufferview), (err) => err)
        .then((data) => {
          saving(data);
        }, (err) => err);
    });
  }
}

// GameSavingLoader.load().then(data => {
//   console.log(data);
// })
