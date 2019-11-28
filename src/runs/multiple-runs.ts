import { report, showResults, toDateSetOfSize, hasMatchIn } from '../utils'

const runForSize = (size: number, idx: number) => {
  report(`Generating birthdays for run ${idx + 1}...`)
  const birthdays = toDateSetOfSize(size)
  showResults('All Dates:', birthdays)
  report('Checking for matches...')
  const matches = birthdays.filter(hasMatchIn(birthdays))
  showResults('Matches:', matches)
  return matches.length
}

const gt = (a: number) => (b: number) => b > a

const startRuns = (numberOfRuns: number, runSize: number) => {
  report(`Starting ${numberOfRuns} runs of size ${runSize}...`, true)
  const doRun = (_: unknown, idx: number) => runForSize(runSize, idx)
  const results = Array(numberOfRuns)
    .fill(null)
    .map(doRun)
  // console.log(results)
  const matches = results.filter(gt(0)).length
  report(`Runs with matches: ${matches} (${(matches * 100) / numberOfRuns}%)`, true)
}

export default startRuns
