/**
 * @module gulp/util
 * @author Matthew Birch <matthew678532@gmail.com>
 */

import * as util from '../src/helper/util'

/**
 * getTaskNames - retrieve the task names of the defined gulp tasks.
 * @param  {Object} tasks an object containing a collection of gulp tasks
 * defined within gulp/task.
 * @return {Array} an array of gulp tasks if they exist, otherwise an empty
 * array is returned.
 */
util.getTaskNames = function(tasks) {
  if (!util.isPureObject(tasks)) return []

  const taskNames = Object.keys(tasks)

  if (!taskNames.length) return []

  return taskNames
}

export { util }
