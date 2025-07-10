const { calculate } = require('../script');

describe('calculate', () => {
  test('adds numbers', () => {
    expect(calculate('1+2')).toBe(3);
  });

  test('subtracts numbers', () => {
    expect(calculate('5-2')).toBe(3);
  });

  test('multiplies numbers using \u00D7 symbol', () => {
    expect(calculate('3×4')).toBe(12);
  });

  test('divides numbers using \u00F7 symbol', () => {
    expect(calculate('8÷2')).toBe(4);
  });

  test('handles complex expressions', () => {
    expect(calculate('2+3*4')).toBe(14);
  });
});
