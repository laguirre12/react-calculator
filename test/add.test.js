const jest = require('jest');

function add(a, b) {
  return a + b;
}

describe('add', function () {
  test('added two numbers correctly', function () {
    expect(add(2, 3)).toBe(5);
  });
});
