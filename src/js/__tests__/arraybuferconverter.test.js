import ArrayBufferConverter, { getBuffer } from '../arraybufferconverter';

test('ArrayBuferConverter load method', () => {
  const buffer = getBuffer();
  const abf = new ArrayBufferConverter();
  const abfView = new Uint16Array(buffer);
  abf.load(buffer);
  expect(abf.bufferView).toEqual(abfView);
});

test('ArrayBuferConverter toString method', () => {
  const buffer = getBuffer();
  const abf = new ArrayBufferConverter();
  abf.load(buffer);
  expect(abf.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
