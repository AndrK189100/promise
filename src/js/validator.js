export default class Validator {
  constructor() {
    throw new Error('create object is forbidden');
  }

  static validateUsername(nickname) {
    if ((nickname.search(/^[a-zA-Z][-\w]*[a-zA-Z]$/) === -1) || (nickname.search(/\d{3}/) !== -1)) { throw new Error('nickname wrong'); }
    return true;
  }

  static validatePhone(phone) {
    const p = phone.replace(/[^\d*]/g, '').split('');
    if (p.length >= 12) {
      p[0] += p[1];
      p.splice(1, 1);
    }

    let cleanPhone = `+${p[0] === '8' ? '7' : p[0]}`;
    for (let i = 1; i < p.length; i += 1) {
      cleanPhone += p[i];
    }
    return cleanPhone;
  }
}
