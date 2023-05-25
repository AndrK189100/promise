import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((saving) => {
      read().then((bufferview) => json(bufferview), (error) => { throw new Error(error); })
        .then((data) => {
          saving(data);
        }, (error) => { throw new Error(error); });
    });
  }
}
