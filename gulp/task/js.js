import { config, gulp, pump } from './../core.js'
import gBabel from 'gulp-babel'

export default function js(cb) {
  pump([
    gulp.src(config.SRC_FILES),
    gBabel(),
    gulp.dest(config.DIST_DIR)
  ], cb)
}
