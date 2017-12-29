'use strict'

import config from './gulp/gulp.config.js'
import dir from 'require-dir'
import gulp from 'gulp'

const tasks = dir(config.GULP_TASKS)

Object.keys(tasks).forEach((taskName) => {
  gulp.task(taskName, tasks[taskName].default)
})

gulp.task('default', Object.keys(tasks))
