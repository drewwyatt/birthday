import ora from 'ora'
import { execMultipleRuns } from './runs'
// execSingleRunOfSize(23)

const progress = ora('Starting...').start()
execMultipleRuns(progress, 1000000, 15).then(msg => progress.succeed(msg))
