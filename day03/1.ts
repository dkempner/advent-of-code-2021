import { solve } from './helper'

solve((lines) => {
  let gamma = ''
  let length = lines[0].length

  let bits = []
  for (let i = 0; i < length; i++) {
    bits[i] = 0
  }

  lines.forEach((l) => {
    const asArr = l.split('').map(Number)
    for (let i = 0; i < asArr.length; i++) {
      if (asArr[i]) {
        bits[i]++
      } else {
        bits[i]--
      }
    }
  })

  let finalArr = []
  bits.forEach((bit) => {
    if (bit > 0) finalArr.push(1)
    else {
      finalArr.push(0)
    }
  })

  console.log(finalArr.join(''))

  // 2346 * 1749

  100100101010
  011011010101
  
})
