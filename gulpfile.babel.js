'use strict'

import * as tasks from './gulp/tasks.js'
import gulp from 'gulp'
import config from './gulp/gulp.config.js'

Object.keys(tasks).forEach((taskName) => {
  gulp.task(taskName, tasks[taskName])
})

gulp.task('default', gulp.series(config.ESLINT_TASK, config.JS_TASK))
