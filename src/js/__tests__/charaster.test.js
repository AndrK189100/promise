import Character from '../character';

test.each(['s', 'sssssssssssssssssssss', 1])('Charaster constructor check if not passed name=%s', (name) => {
  expect(() => { new Character(name); }).toThrow('Name wrong');
});

test('Charaster constructor check if passed name=', () => {
  expect(new Character('sss')._name).toBe('sss');
});

test('Charaster levelUp method', () => {
  const pers = new Character('sss');
  pers.baseAttack = 10;
  pers.defence = 10;
  pers.levelUp();
  expect(pers._level).toBe(2);
  expect(pers._attack).toBe(12);
  expect(pers._attack).toBe(12);
});

test('Charaster levelUp if person died', () => {
  const pers = new Character('sss');
  pers._health = 0;
  expect(() => pers.levelUp()).toThrow('pers Died');
});

test('Charaster domage method', () => {
  const pers = new Character('sss');
  pers._attack = 10;
  pers._defence = 10;
  pers.damage(5);
  expect(pers._health).toBe(95.5);
});

test('Charaster domage method if pers died', () => {
  const pers = new Character('sss');
  pers._health = 0;
  expect(() => pers.damage(5)).toThrow('pers Died');
});

test('Charaster set stoned', () => {
  const charaster = new Character('name');
  charaster.stoned = 2;
  expect(charaster._stoned).toBe(2);
  expect(() => { charaster.stoned = 0; }).toThrow('1');
});

test('Charaster get stoned', () => {
  const charaster = new Character('name');
  expect(charaster.stoned).toBe(1);
});

test('Charaster set baseAttack', () => {
  const charaster = new Character('name');
  charaster.baseAttack = 10;
  expect(charaster._attack).toBe(10);
  expect(() => { charaster.baseAttack = 0; }).toThrow('3');
});

test('Charaster get baseAttack', () => {
  const charaster = new Character('name');
  expect(charaster.baseAttack).toBe(1);
});
