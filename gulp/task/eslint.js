import { config, gulp, pump } from './../core.js'
import lint from 'gulp-eslint'

export default function eslint(cb) {
  pump([
    gulp.src([config.SRC_MODULE, `!${config.NODE_MODULES}`]),
    lint(config.ESLINT_CONFIG),
    lint.format(),
    lint.failAfterError()
  ], cb)
}
