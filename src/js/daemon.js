import Character from './character.js';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this._type = 'Daemon';
    this._attack = 10;
    this._defence = 40;
    this._special = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ];
  }

  attack(cellNumber) {
    if (cellNumber < 1 || cellNumber > 5) { throw new Error(4); }
    const percentAttack = 100 - ((cellNumber - 1) * 10);
    const attack = (this._attack * percentAttack) / 100;
    return attack - Math.log2(cellNumber) * this._stoned;
  }
}
