export const fixIfNotInt = (number: number, to = 2) =>
  Number.isInteger(number) ? `${number}` : number.toFixed(to)
export const defaultIfNan = (number: number, fb = 0) =>
  Number.isNaN(number) ? fb : number