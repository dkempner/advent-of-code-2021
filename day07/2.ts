import { solve, bitsToInt } from './helper'

const penalty = (num: number) => {
  let total = 0
  for (let i = num; i > 0; i--) {
    total = total + i
  }
  return total
}

const calcFuel = (mid: number, positions: number[]) => {
  let total = 0
  positions.forEach((p) => {
    const absDiff = Math.abs(mid - p)
    total = total + penalty(absDiff)
  })

  return total
}

solve((lines) => {
  let positions: number[] = []
  lines.forEach((line) => {
    line
      .split(',')
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((n) => positions.push(n))
  })

  let min = Infinity
  let minGuess = positions[0]
  let maxGuess = positions[positions.length - 1]

  for (let i = minGuess; i <= maxGuess; i++) {
    let fuel = calcFuel(i, positions)
    if (fuel < min) {
      min = fuel
    }
  }

  return min
})
