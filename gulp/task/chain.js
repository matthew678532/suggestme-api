import { config, gulp } from './../core.js'

export default function chain() {
  gulp.series(config.ESLINT_TASK, config.JS_TASK)
}
