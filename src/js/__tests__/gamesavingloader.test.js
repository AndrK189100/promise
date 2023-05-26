import GameSavingLoader from '../gamesavingloader.js';
import read from '../reader.js';

jest.mock('../reader.js');

test('GameSavingLoader load if resolved', async () => {
  read.mockResolvedValue(new Promise((resolve) => {
    const buffer = new ArrayBuffer(2);
    const view = new Uint16Array(buffer);
    view[0] = 'A'.charCodeAt(0);
    resolve(buffer);
  }));
  expect(await GameSavingLoader.load()).toBe('A');
});

test('GameSavingLoader load if resolved', async () => {
  read.mockReturnValue(new Promise((resolve, reject) => reject(new Error('ОШИБКА'))));
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e.message).toBe('ОШИБКА');
  }
});
