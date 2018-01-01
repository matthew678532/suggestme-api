import { root } from './../global.config.js'

export default {
  // File path globs
  SRC_FILES: `${root}/src/**/*.js`,
  TEST_UNIT_FILES: `${root}/test/unit/**/*[sS]pec.js`,
  TEST_INTEGRATION_FILES: `${root}/test/integration/**/*[sS]pec.js`,
  NODE_MODULES: `${root}/node_modules/**/*`,

  // Option file paths
  ESLINT_CONFIG: `${root}/.eslintrc.js`,

  // Directory path globs
  DIST_DIR: `${root}/dist`,

  // Task names
  JS_TASK: 'js',
  ESLINT_TASK: 'eslint',
  MOCHA_TASK: 'mocha',
  CLEAN_TASK: 'clean'
}
