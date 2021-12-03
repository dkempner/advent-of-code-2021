import { solve } from './helper'

const bitsToInt = (bits: string) => {
  return parseInt(bits, 2)
}

const mostCommonInColumn = (grid: number[][], col: number) => {
  let zeroes = 0
  let ones = 0

  grid.forEach((row) => {
    if (row[col] === 0) zeroes++
    else {
      ones++
    }
  })

  if (ones >= zeroes) return 1
  return 0
}

const leastCommonInColumn = (grid: number[][], col: number) => {
  return mostCommonInColumn(grid, col) === 0 ? 1 : 0
}

const filterGrid = (grid: number[][], match: number, col: number) => {
  return grid.filter((row) => {
    return row[col] === match
  })
}

const removeColumn = (grid: number[][]) => {
  return grid.map((row) => {
    row.shift()
    return row
  })
}

const getOxygen = (grid: number[][]) => {
  let thisGrid = grid
  let col = 0
  while (thisGrid.length) {
    const mostCommon = mostCommonInColumn(thisGrid, col)
    thisGrid = filterGrid(thisGrid, mostCommon, col)
    col++
    
    if (thisGrid.length === 1) return thisGrid[0].join('')
  }
}

const getCo2 = (grid: number[][]) => {
  let thisGrid = grid
  let col = 0
  while (thisGrid.length) {
    const leastCommon = leastCommonInColumn(thisGrid, col)
    thisGrid = filterGrid(thisGrid, leastCommon, col)
    col++
    
    if (thisGrid.length === 1) return thisGrid[0].join('')
  }
}

solve((lines) => {
  const grid = []
  lines.forEach((l) => {
    const row = []
    l.split('').forEach((char) => {
      row.push(Number(char))
    })
    grid.push(row)
  })

  const oxygen = getOxygen(grid) // 110101000111 = 3399
  const co2 = getCo2(grid) // 010011100001 = 1249

  return bitsToInt(oxygen) * bitsToInt(co2)
})
