export default class ErrorRepository {
  static storage = new Map([
    [1, 'stonde value error. must be 1<=stoned<=5'],
    [2, 'method must be overridden'],
    [3, 'attack value error. must be 1<=attack<=100'],
    [4, 'cell value error. must be 1<=cell<=5'],
  ]);

  static translate(errorNumber) {
    const error = this.storage.get(errorNumber);
    if (error === undefined) { return 'Unknown error'; }
    return error;
  }
}
