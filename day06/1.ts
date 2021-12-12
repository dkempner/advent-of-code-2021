import { group } from 'console'
import { solve, bitsToInt } from './helper'

type Groups = Map<number, number>

const advanceDay = (groups: Groups) => {
  const keys = Array.from(groups.keys()).sort().reverse().map(Number)
  const newGroups: Groups = new Map()

  keys.forEach((k) => {
    const val = groups.get(k)
    if (!val) return
    if (k > 0) {
      newGroups.set(k - 1, val)
    } else {
      newGroups.set(6, (newGroups.get(6) || 0) + val)
      newGroups.set(8, val)
    }
  })

  return newGroups
}

const report = (groups: Groups) => {
  const sorted = Array.from(groups.keys()).sort().reverse()
  const toReport: { [key: number]: number } = {}
  sorted.forEach((num) => {
    toReport[num] = groups.get(num) ?? 0
  })

  console.log(toReport)
}

solve((lines) => {
  const inputs: number[] = []
  lines.forEach((line) => {
    line
      .split(',')
      .map(Number)
      .forEach((x) => inputs.push(x))
  })

  let groups: Groups = new Map()

  inputs.forEach((x) => {
    groups.set(x, (groups.get(x) ?? 0) + 1)
  })

  for (let i = 0; i < 80; i++) {
    report(groups)
    groups = advanceDay(groups)
  }

  report(groups)

  let final = 0
  groups.forEach((val) => {
    final = final + val
  })

  return final
})
