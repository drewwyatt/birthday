import { report, showResults, toDateSetOfSize, hasMatchIn } from './utils'

report('Generating birthdays...')

const birthdays = toDateSetOfSize(23)

showResults('All Dates:', birthdays)

report('Checking for matches...')

const matches = birthdays.filter(hasMatchIn(birthdays))

showResults('Matches:', matches)
