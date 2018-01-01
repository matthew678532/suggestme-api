import { config } from './../core.js'
import del from 'del'

export default function clean() {
  return del.sync([`${config.DIST_DIR}/**/*`])
}
