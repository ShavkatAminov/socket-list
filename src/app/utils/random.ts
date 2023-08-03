

export function getRandomNumber() {
  return Math.random();
}

export function getRandomInt() {
  return Math.round(getRandomNumber() * 1000000000);
}

export function getRandomBetWeenNotEqual(from: number, to: number, notEqual: number | null = null): number {
  let result = getRandomInt() % (to - from);
  result += from;
  if(result != notEqual) {
    return result;
  }
  return  getRandomBetWeenNotEqual(from, to, notEqual);
}
