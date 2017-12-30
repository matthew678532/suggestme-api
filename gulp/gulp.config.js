import { root } from './../global.config.js'

export default {
  // Config options go here
  SRC_MODULE: `${root}/src/module/**/*.js`,
  DIST: `${root}/dist`,
  NODE_MODULES: `${root}/node_modules/**`,
  ESLINT_CONFIG: `${root}/.eslintrc.js`,
  JS_TASK: 'js',
  ESLINT_TASK: 'eslint'
}
