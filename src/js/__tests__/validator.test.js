import Validator from '../validator.js';

test('must be exeption at create object', () => {
  expect(() => new Validator()).toThrow('create object is forbidden');
});

test('validateUserName method if nickname passed', () => {
  expect(Validator.validateUsername('s34ff4-12s')).toBe(true);
});

test.each([
  '1ddd',
  'ddd1',
  '-ddd',
  'ddd-',
  '_ddd',
  'ddd_',
  'ddd334ddd',
  'ddd567890d',
  'ddfd dffd',
  ' sdfdf',
  'sdf ',

])('validateUserName method if nickname not passed', (expected) => {
  expect(() => Validator.validateUsername(expected)).toThrow('nickname wrong');
});

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['89 21 555 5 555', '+79215555555'],
  ['8 6 123 4 56 1234', '+861234561234'],

])('validate phone numbers', (value, expected) => {
  expect(Validator.validatePhone(value)).toBe(expected);
});
