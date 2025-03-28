export function play(move1: string, move2: string): number {
  move1 = move1.trim().toLowerCase();
  move2 = move2.trim().toLowerCase();

  const validMoves = ['rock', 'paper', 'scissors'];
  if (!validMoves.includes(move1) || !validMoves.includes(move2)) {
    throw new Error('Invalid move');
  }

  if (move1 === move2) {
    return 0;
  }

  if (
    (move1 === 'rock' && move2 === 'scissors') ||
    (move1 === 'paper' && move2 === 'rock') ||
    (move1 === 'scissors' && move2 === 'paper')
  ) {
    return 1;
  }

  return 2;
}
