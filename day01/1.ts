import { solve } from './helper'

solve((input) => {
  const numbers = input.map(Number)
  let increases = 0

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) increases++
  }

  console.log(increases)
})
