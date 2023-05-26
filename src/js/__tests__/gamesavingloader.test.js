import GameSavingLoader from '../gamesavingloader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('GameSavingLoader load if read resolve', async () => {
  read.mockResolvedValue(new Promise((resolve) => {
    const buffer = new ArrayBuffer(2);
    const view = new Uint16Array(buffer);
    view[0] = 'A'.charCodeAt(0);
    resolve(buffer);
  }));

  expect(await GameSavingLoader.load()).toBe('A');
});

test('GameSavingLoader load if read resolve', async () => {
  read.mockResolvedValue(new Promise((resolve, reject) => {
    reject(new Error('o_O'));
  }));

  expect(await GameSavingLoader.load()).toEqual(new Error('o_O'));
});
