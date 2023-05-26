import GameSavingLoaderAsync from '../gamesavingloaderasync.js';
import read from '../reader.js';

jest.mock('../reader.js');

test('GameSavingLoaderAsync load if read reject', async () => {
  read.mockReturnValue(new Promise((resolve, reject) => reject(new Error('ОШИБКА'))));

  expect((await GameSavingLoaderAsync.load()).message).toBe('ОШИБКА');
});

test('GameSavingLoaderAsync load if read resolved', async () => {
  read.mockResolvedValue(new Promise((resolve) => {
    const buffer = new ArrayBuffer(2);
    const view = new Uint16Array(buffer);
    view[0] = 'A'.charCodeAt(0);
    resolve(buffer);
  }));

  expect(await GameSavingLoaderAsync.load()).toBe('A');
});
