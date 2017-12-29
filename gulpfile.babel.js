'use strict'

import * as tasks from './gulp/tasks.js'
import gulp from 'gulp'

Object.keys(tasks).forEach((taskName) => {
  gulp.task(taskName, tasks[taskName])
})

gulp.task('default', Object.keys(tasks))
