import { Ora } from 'ora'
import { showResults, toDateSetOfSize, hasMatchIn } from '../utils'

const runForSize = (size: number, progress: Ora) => (_: unknown, idx: number) => {
  progress.text = `Generating birthdays for run ${idx + 1}...`
  const birthdays = toDateSetOfSize(size)
  progress.text = `Checking for matches for run ${idx + 1}...`
  const matches = birthdays.filter(hasMatchIn(birthdays))
  return matches.length
}

const gt = (a: number) => (b: number) => b > a

const startRuns = async (progress: Ora, numberOfRuns: number, runSize: number) => {
  progress.text = `Starting ${numberOfRuns} runs of size ${runSize}...`
  const results = Array(numberOfRuns)
    .fill(null)
    .map(runForSize(runSize, progress))

  const matches = results.filter(gt(0)).length

  showResults('Run Results:', results)
  return `Runs with matches: ${matches} (${(matches * 100) / numberOfRuns}%)`
}

export default startRuns
