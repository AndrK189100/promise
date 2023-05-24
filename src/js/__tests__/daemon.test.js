import Daemon from '../daemon.js';

test('Daemon attack method', () => {
  const daemon = new Daemon('name');
  expect(daemon.attack(2)).toBe(8);
  expect(daemon.attack(1)).toBe(10);
  expect(() => { daemon.attack(100); }).toThrow('4');
});
