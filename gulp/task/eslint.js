import { config, gulp, pump } from './../core.js'
import gEslint from 'gulp-eslint'

export default function eslint(cb) {
  pump([
    gulp.src([config.SRC_MODULE, `!${config.NODE_MODULES}`]),
    gEslint(config.ESLINT_CONFIG),
    gEslint.format(),
    gEslint.failAfterError()
  ], cb)
}
