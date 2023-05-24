import Character from './character.js';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this._type = 'Zombie';
    this._attack = 40;
    this._defence = 10;
  }
}
