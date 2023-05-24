import Character from './character.js';

export default class Undead extends Character {
  constructor(name) {
    super(name);
    this._type = 'Undead';
    this._attack = 25;
    this._defence = 25;
  }
}
