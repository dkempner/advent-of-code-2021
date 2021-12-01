import { solve } from './helper'

solve((input) => {
  const numbers = input.map(Number)
  let increases = 0

  for (let i = 3; i < numbers.length; i++) {
    if (
      numbers[i] + numbers[i - 1] + numbers[i - 2] >
      numbers[i - 1] + numbers[i - 2] + numbers[i - 3]
    ) {
      increases++
    }
  }

  console.log(increases)
})
