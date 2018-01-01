import { root } from './../global.config.js'

export default {
  // File path globs
  SRC_MODULE: `${root}/src/module/**/*.js`,
  DIST: `${root}/dist`,
  NODE_MODULES: `${root}/node_modules/**`,
  ESLINT_CONFIG: `${root}/.eslintrc.js`,
  TEST_UNIT: `${root}/test/unit/**/*[sS]pec.js`,
  TEST_INTEGRATION: `${root}/test/integration/**/*[sS]pec.js`,
  // Task names
  JS_TASK: 'js',
  ESLINT_TASK: 'eslint',
  MOCHA_TASK: 'mocha'
}
