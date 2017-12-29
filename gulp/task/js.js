import { config, gulp, pump } from '../core.js'
import babel from 'gulp-babel'

export default function js(cb) {
  pump([
    gulp.src(config.SRC_MODULE),
    babel(),
    gulp.dest(config.DIST)
  ], cb)
}
