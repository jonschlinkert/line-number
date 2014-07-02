/*!
 * line-number <https://github.com/jonschlinkert/line-number>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';


module.exports = function lineNo(str, re) {
  return str.split(/[\r\n]/).map(function (line, i) {
    if (re.test(line)) {
      return {
        line: line,
        number: i + 1,
        match: line.match(re)[0]
      };
    }
  }).filter(Boolean);
};