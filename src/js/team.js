export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) { throw new Error('has already'); }
    this.members.add(member);
    return true;
  }

  addAll(...members) {
    members.forEach((item) => this.members.add(item));
    return true;
  }

  toArray() {
    return Array.from(this.members);
  }
}
