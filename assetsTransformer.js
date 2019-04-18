/**
 * Resolve for "Syntax Error: Invalid or unexpected token" with .(svg|png)
 *
 * https://github.com/facebook/jest/issues/2663#issuecomment-317109798
 */
const path = require('path');

module.exports = {
  process(src, filename) {
    return `${module.exports} = ${JSON.stringify(path.basename(filename))};`;
  }
};
