import { solve, bitsToInt } from './helper'

const rows = (board: number[][]) => {
  return board
}

const columns = (board: number[][]): number[][] => {
  const length = board[0].length
  const columns = []
  for (let i = 0; i < length; i++) {
    const column = []
    for (let j = 0; j < board.length; j++) {
      column.push(board[j][i])
    }
    columns.push(column)
  }
  return columns
}

const isWinner = (board: number[][], calledNumbs: Set<number>) => {
  const rowWinner = rows(board).find((row) =>
    row.every((cell) => calledNumbs.has(cell))
  )
  const colWinner = columns(board).find((col) =>
    col.every((cell) => calledNumbs.has(cell))
  )

  return Boolean(rowWinner || colWinner)
}

const uncalledNumbers = (board: number[][], calledNumbs: Set<number>) => {
  const result: number[] = []

  board.forEach((row) => {
    row.forEach((cell) => {
      if (!calledNumbs.has(cell)) result.push(cell)
    })
  })

  return result
}

solve((lines) => {
  const bingoNumbers = lines[0].split(',').map(Number)
  const boards: number[][][] = []

  let counter = 2
  let board: number[][] = []
  while (counter < lines.length) {
    if (!lines[counter]) {
      boards.push(board)
      board = []
      counter++
    }
    const rowAsString = lines[counter]
    const row = rowAsString
      .split(' ')
      .filter((x) => x !== '')
      .map(Number)
    board.push(row)
    counter++
  }
  boards.push(board)

  const calledNumbs = new Set<number>()
  let winner: number[][] | undefined = undefined
  while (!winner) {
    const nextNumber = bingoNumbers.shift()
    if (!nextNumber) break
    calledNumbs.add(nextNumber)
    winner = boards.find((board) => isWinner(board, calledNumbs))
  }

  if (!winner) throw new Error('no winner')
  
  const uncalled = uncalledNumbers(winner, calledNumbs)

  const sum = uncalled.reduce((prev, curr) => {
    return prev + curr
  }, 0)

  const lastCalled = Array.from(calledNumbs).pop()

  if (!lastCalled) throw new Error('no lastCalled')

  return sum * lastCalled
})
