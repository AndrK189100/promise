import { orderByProps, getSpecialAttack } from '../sfunctions.js';
import Daemon from '../daemon.js';

const props = [
  { key: '_name', value: 'Azrail' },
  { key: '_type', value: 'Daemon' },
  { key: '_attack', value: 10 },
  { key: '_defence', value: 40 },
  { key: '_health', value: 100 },
  { key: '_level', value: 1 },
  {
    key: '_special',
    value: [{
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    }, { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' }],
  },
  { key: '_stoned', value: 1 },
];

const special = [
  {
    id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
  },
];

test('Check function orderByProps', () => {
  const daemon = new Daemon('Azrail');
  expect(orderByProps(daemon, ['_name', '_type'])).toEqual(props);
});

test('Check function getSpecialAttack', () => {
  const daemon = new Daemon('Azrail');
  expect(getSpecialAttack(daemon)).toEqual(special);
});
