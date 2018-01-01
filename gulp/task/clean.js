import { config } from './../core.js'
import del from 'del'

export default function clean() {
  return del([`${config.DIST_DIR}/**/*`])
}
