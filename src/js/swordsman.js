import Character from './character.js';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this._type = 'Swordsman';
    this._attack = 40;
    this._defence = 10;
  }
}
