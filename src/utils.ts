import { DEBUG_PRINT } from './env'

// Dates

const toRandomDate = (
  start: Date = new Date(2020, 0, 1),
  end: Date = new Date(2020, 11, 31),
) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

const toComparableRandomDate = () => {
  const date = toRandomDate()
  return [date.getMonth() + 1, date.getDate()].join('/')
}

export const hasMatchIn = (birthdays: string[]) => (birthday: string, idx: number) =>
  birthdays.indexOf(birthday, idx + 1) > -1

export const toDateSetOfSize = (size: number) =>
  Array(size)
    .fill(null)
    .map(toComparableRandomDate)

// Logging

const DELIMITER = '---------------------------------------'

export const report = (msg: string, alwaysPrint: boolean = false) => {
  if (DEBUG_PRINT || alwaysPrint) {
    console.log([DELIMITER, msg, DELIMITER].join('\n'))
  }
}

export const showResults = (
  label: string,
  results: any,
  alwaysPrint: boolean = false,
) => {
  if (DEBUG_PRINT || alwaysPrint) {
    console.log(label, results)
  }
}
