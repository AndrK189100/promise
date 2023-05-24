export default class Character {
  constructor(name) {
    if (typeof (name) === 'string' && (name.length >= 2 && name.length <= 10)) {
      this._name = name;
    } else {
      throw new Error('Name wrong');
    }

    this._stoned = 1;
    this._type = '';
    this._attack = 1;
    this._defence = 1;
    this._health = 100;
    this._level = 1;
  }

  levelUp() {
    if (this._health <= 0) {
      throw new Error('pers Died');
    }
    this._level += 1;
    this._attack += (this._attack * 20) / 100;
    this._defence += (this._defence * 20) / 100;
    this._health = 100;
  }

  damage(points) {
    if (this._health <= 0) {
      throw new Error('pers Died');
    }

    this._health -= points * (1 - this._defence / 100);
  }

  /**
   * @param {number} stone
   */
  set stoned(stone) {
    if (stone > 0 && stone < 6) {
      this._stoned = stone;
      return true;
    }
    throw new Error(1);
  }

  get stoned() {
    return this._stoned;
  }

  /**
   * @param {number} attack
   */
  set baseAttack(attack) {
    if (attack > 0 && attack < 101) { this._attack = attack; return true; }
    throw new Error(3);
  }

  get baseAttack() {
    return this._attack;
  }
}

// const a = new Character('name');
// a.stoned = 2;
