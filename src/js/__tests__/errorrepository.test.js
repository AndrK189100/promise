import ErrorRepository from '../errorrepository';

test('translate method', () => {
  expect(ErrorRepository.translate(1)).toBe('stonde value error. must be 1<=stoned<=5');
  expect(ErrorRepository.translate(5)).toBe('Unknown error');
});
