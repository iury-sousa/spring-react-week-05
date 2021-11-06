export function round(value: number, precision: number) {
  const baseValue = 10;

  const multiplier = Math.pow(baseValue, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
