import { config, gulp, pump } from './../core.js'
import gMocha from 'gulp-mocha'
import mochaConfig from './../../test/mocha.config.js'

export default function mocha(cb) {
  pump([
    gulp.src([config.TEST_UNIT, config.TEST_INTEGRATION]),
    gMocha(mochaConfig)
  ], cb)
}
