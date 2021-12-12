import { solve, bitsToInt } from './helper'

const calcFuel = (mid: number, positions: number[]) => {
  let total = 0
  positions.forEach((p) => {
    total = total + Math.abs(mid - p)
  })

  return total
}

solve((lines) => {
  let positions: number[] = []
  lines.forEach((line) => {
    line
      .split(',')
      .map(Number)
      .sort()
      .forEach((n) => positions.push(n))
  })

  let min = Infinity
  let midIndex = Math.floor(positions.length / 2)
  let mid = positions[midIndex]

  if (calcFuel(mid, positions) < min) {
    min = calcFuel(mid, positions)
  }

  for (let i = midIndex - 100; i < midIndex; i++) {
    if (calcFuel(positions[i], positions) < min) {
      min = calcFuel(positions[i], positions)
    }
  }

  for (let i = midIndex + 100; i > midIndex; i--) {
    if (calcFuel(positions[i], positions) < min) {
      min = calcFuel(positions[i], positions)
    }
  }

  return min
})
