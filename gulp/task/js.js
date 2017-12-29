import { config, util, gulp, pump } from '../core'
import babel from 'gulp-babel'

export default function js(cb) {
  pump([
    gulp.src(config.SRC_MODULES),
    babel(),
    gulp.dest(config.DIST)
  ], cb)
}
