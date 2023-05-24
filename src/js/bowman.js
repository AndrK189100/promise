import Character from './character.js';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this._type = 'Bowman';
    this._attack = 25;
    this._defence = 25;
  }
}
