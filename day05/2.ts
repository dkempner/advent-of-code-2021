import { solve, bitsToInt } from './helper'

type Point = {
  x: number
  y: number
}

const pointsBetween = (x1: number, y1: number, x2: number, y2: number) => {
  let xMin = Math.min(x1, x2)
  let xMax = Math.max(x1, x2)
  let yMin = Math.min(y1, y2)
  let yMax = Math.max(y1, y2)

  const points: Point[] = []

  if (xMin === xMax) {
    let x = xMin
    let y = yMin
    while (y <= yMax) {
      points.push({ x, y })
      y++
    }
  } else if (yMin === yMax) {
    let x = xMin
    let y = yMin
    while (x <= xMax) {
      points.push({ x, y })
      x++
    }
  } else {
    const xStart = x1
    const xEnd = x2
    const yStart = y1
    const yEnd = y2

    let x = xStart
    let y = yStart

    const xSign = xStart < xEnd ? 1 : -1
    const ySign = yStart < yEnd ? 1 : -1

    while (x !== xEnd && y !== yEnd) {
      points.push({
        x,
        y,
      })
      x = x + 1 * xSign
      y = y + 1 * ySign
    }
    points.push({
      x: xEnd,
      y: yEnd,
    })
  }

  return points
}

solve((lines) => {
  const inputs = lines.map((line) => {
    const [left, right] = line.split(' -> ')
    const [x1, y1] = left.split(',')
    const [x2, y2] = right.split(',')

    return {
      x1: Number(x1),
      y1: Number(y1),
      x2: Number(x2),
      y2: Number(y2),
    }
  })

  let xMin = Infinity
  let xMax = -Infinity

  let yMin = Infinity
  let yMax = -Infinity

  inputs.forEach((i) => {
    const { x1, x2, y1, y2 } = i
    if (x1 < xMin) xMin = x1
    if (x1 > xMax) xMax = x1

    if (x2 < xMin) xMin = x2
    if (x2 > xMax) xMax = x2

    if (y1 < yMin) yMin = x1
    if (y1 > yMax) yMax = x1

    if (y2 < yMin) yMin = x2
    if (y2 > yMax) yMax = x2
  })

  const hits: number[][] = []
  for (let x = 0; x <= xMax; x++) {
    hits[x] = []
    for (let y = 0; y <= yMax; y++) {
      hits[x][y] = 0
    }
  }

  // const nonDiags = inputs.filter((i) => {
  //   const { x1, x2, y1, y2 } = i
  //   if (x1 === x2 || y1 === y2) return true
  //   return false
  // })

  inputs.forEach((i) => {
    const { x1, x2, y1, y2 } = i
    pointsBetween(x1, y1, x2, y2).forEach((p) => {
      hits[p.y][p.x]++
    })
  })

  let overlaps = 0

  hits.forEach((row) => {
    row.forEach((cell) => {
      if (cell > 1) overlaps++
    })
  })

  return overlaps
})
