const DEBUG_PRINT = true

const DELIMITER = '---------------------------------------'
const report = (msg: string, alwaysPrint: boolean = false) => {
  if (DEBUG_PRINT || alwaysPrint) {
    console.log([DELIMITER, msg, DELIMITER].join('\n'))
  }
}

const showResults = (label: string, results: any, alwaysPrint: boolean = false) => {
  if (DEBUG_PRINT || alwaysPrint) {
    console.log(label, results)
  }
}

const toRandomDate = (
  start: Date = new Date(2020, 0, 1),
  end: Date = new Date(2020, 11, 31),
) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

const toComparableRandomDate = () => {
  const date = toRandomDate()
  return [date.getMonth() + 1, date.getDate()].join('/')
}

report('Generating birthdays...')

const birthdays = Array(23)
  .fill(null)
  .map(toComparableRandomDate)

showResults('All Dates:', birthdays)

report('Checking for matches...')

const hasMatch = (birthday: string, idx: number) =>
  birthdays.indexOf(birthday, idx + 1) > -1
const matches = birthdays.filter(hasMatch)

showResults('Matches:', matches)
