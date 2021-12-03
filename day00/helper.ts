import { EOL } from 'os'

type SolveCallback = (input: string[]) => void

export function solve(cb: SolveCallback) {
  let input = ''
  process.stdin.on('data', (c) => (input += c))
  process.stdin.on('end', () => {
    const lines = input.split(EOL)
    console.log(cb(lines))
  })
}

export const bitsToInt = (bits: string) => {
  return parseInt(bits, 2)
}
