import { report, showResults, toDateSetOfSize, hasMatchIn } from '../utils'

const runForSize = (size: number) => {
  // Always print for single runs...
  report('Generating birthdays...', true)
  const birthdays = toDateSetOfSize(size)
  showResults('All Dates:', birthdays, true)
  report('Checking for matches...', true)
  const matches = birthdays.filter(hasMatchIn(birthdays))
  showResults('Matches:', matches, true)
}

export default runForSize
