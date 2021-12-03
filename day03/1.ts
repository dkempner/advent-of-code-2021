import { solve } from './helper'

const bitsToInt = (bits: string) => {
  return parseInt(bits, 2)
}

const flipBits = (bits: string) => {
  const newBits = []
  bits.split('').forEach((bit) => {
    newBits.push(bit === '0' ? '1' : '0')
  })
  return newBits.join('')
}

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

  const originalBits = finalArr.join('')
  const flipped = flipBits(originalBits)

  return bitsToInt(originalBits) * bitsToInt(flipped)

})
