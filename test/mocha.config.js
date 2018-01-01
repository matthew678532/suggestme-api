export default {
  ui: 'bdd',
  reporter: 'spec',
  timeout: 500,
  retries: 1,
  colors: true,
  bail: true,
  require: ['babel-register', './test/setup.js']
}
