import Settings from '../settings';

test('set theme', () => {
  const settings = new Settings();
  settings.theme = 'gray';
  expect(settings.userSettins.get('theme')).toBe('gray');
  expect(() => { settings.theme = 'a'; }).toThrow('theme not found');
});

test('set music', () => {
  const settings = new Settings();
  settings.music = 'pop';
  expect(settings.userSettins.get('music')).toBe('pop');
  expect(() => { settings.music = 'a'; }).toThrow('music not found');
});

test('set difficulty', () => {
  const settings = new Settings();
  settings.difficulty = 'hard';
  expect(settings.userSettins.get('difficulty')).toBe('hard');
  expect(() => { settings.difficulty = 'a'; }).toThrow('difficulty not found');
});

test('get theme', () => {
  const settings = new Settings();
  expect(settings.theme).toBe('light');
  settings.theme = 'gray';
  expect(settings.theme).toBe('gray');
});

test('get music', () => {
  const settings = new Settings();
  expect(settings.music).toBe('pop');
  settings.music = 'rock';
  expect(settings.music).toBe('rock');
});

test('get difficulty', () => {
  const settings = new Settings();
  expect(settings.difficulty).toBe('normal');
  settings.difficulty = 'hard';
  expect(settings.difficulty).toBe('hard');
});
