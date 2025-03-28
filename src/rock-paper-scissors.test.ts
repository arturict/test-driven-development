import { play } from './rock-paper-scissors';

describe('Rock Paper Scissors', () => {
  test.each([
    ['rock', 'scissors', 1],
    ['paper', 'rock', 1],
    ['scissors', 'paper', 1],
    ['scissors', 'rock', 2],
    ['rock', 'paper', 2],
    ['paper', 'scissors', 2],
    ['rock', 'rock', 0],
    ['paper', 'paper', 0],
    ['scissors', 'scissors', 0],
    [' ROCK ', ' rock ', 0],
    ['PAPER', 'paper', 0],
    ['SCISSORS', 'scissors', 0],
  ])('play("%s", "%s") should return %i', (move1, move2, expected) => {
    expect(play(move1, move2)).toBe(expected);
  });

  test('should throw error for invalid moves', () => {
    expect(() => play('invalid', 'rock')).toThrow('Invalid move');
    expect(() => play('rock', 'invalid')).toThrow('Invalid move');
  });
});
