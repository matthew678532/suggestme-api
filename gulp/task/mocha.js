import { config, gulp, pump } from './../core.js'
import gMocha from 'gulp-mocha'

export default function mocha(cb) {
  pump([
    gulp.src([config.TEST_UNIT, config.TEST_INTEGRATION]),
    gMocha()
  ], cb)
}
