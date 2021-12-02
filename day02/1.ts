import { solve } from './helper'

solve((input) => {
  let x = 0
  let y = 0
  input.forEach((i) => {
    const split = i.split(' ')
    const direction = split[0]
    const num = Number(split[1])

    if (direction === 'down') y += num
    if (direction === 'up') y -= num
    if (direction === 'back') x -= num
    if (direction === 'forward') x += num
  })
  return x * y
})
