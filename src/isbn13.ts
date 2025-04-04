export function isValid(isbn13: string): boolean {
  if (!/^\d{13}$/.test(isbn13)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 13; i++) {
    const digit = parseInt(isbn13[i]);
    sum += (i % 2 === 0) ? digit : digit * 3;
  }

  return (sum % 10 === 0);
}
