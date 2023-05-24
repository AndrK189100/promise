import Team from '../team.js';
import Daemon from '../daemon.js';

test('add method', () => {
  const pers = new Daemon('Azrail');
  const team = new Team();
  expect(team.add(pers)).toBe(true);
});

test('add pers if exist', () => {
  const pers = new Daemon('Azrail');
  const team = new Team();
  team.add(pers);
  expect(() => team.add(pers)).toThrow('has already');
});

test('add several pers', () => {
  const pers = new Daemon('Azrail');
  const team = new Team();
  expect(team.addAll(pers, pers)).toBe(true);
});

test('get array from team', () => {
  const pers = new Daemon('Azrail');
  const team = new Team();
  team.add(pers);
  expect(team.toArray()).toBeInstanceOf(Array);
});
