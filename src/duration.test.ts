import { formatDuration } from './duration';

describe('duration formatting', () => {
  test('formats 0 seconds correctly', () => {
    expect(formatDuration(0)).toBe('0s');
  });

  test('formats simple seconds correctly', () => {
    expect(formatDuration(33)).toBe('33s');
  });

  test('formats minutes and seconds correctly', () => {
    expect(formatDuration(123)).toBe('2m3s');
    expect(formatDuration(500)).toBe('8m20s');
  });

  test('formats hours correctly', () => {
    expect(formatDuration(3600)).toBe('1h');
    expect(formatDuration(3999)).toBe('1h6m39s');
  });

  test('rounds decimal seconds', () => {
    expect(formatDuration(61.8)).toBe('1m2s');
    expect(formatDuration(59.2)).toBe('59s');
  });

  test('throws error for negative numbers', () => {
    expect(() => formatDuration(-1)).toThrow('Duration cannot be negative');
  });
});
