import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoaderAsync {
  static async load() {
    try {
      const bufferView = await read();
      const data = await json(bufferView);
      return data;
    } catch (e) {
      return (e);
    }
  }
}

// (async () => {
//   console.log(await GameSavingLoaderAsync.load());
// })();
