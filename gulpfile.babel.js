'use strict'

import * as tasks from './gulp/tasks.js'
import { config, gulp, Util } from './gulp/core.js'

const taskNames = Util.getTaskNames(tasks)

taskNames.forEach((taskName) => {
  gulp.task(taskName, tasks[taskName])
})

gulp.task(
  'default',
  gulp.series(
    config.CLEAN_TASK,
    config.ESLINT_TASK,
    config.MOCHA_TASK,
    config.JS_TASK
  )
)
