import { solve } from './helper'

solve((input) => {
  let x = 0
  let y = 0
  let aim = 0
  input.forEach((i) => {
    const split = i.split(' ')
    const direction = split[0]
    const num = Number(split[1])

    if (direction === 'down') aim += num
    if (direction === 'up') aim -= num
    if (direction === 'forward') {
      x = x + num
      y = y + aim * num
    }
  })
  return x * y
})
