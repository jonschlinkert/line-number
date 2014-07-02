/*!
 * line-no <https://github.com/jonschlinkert/line-no>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function lineNo(str, re) {
  var lines = str.split(/[\r\n]/);
  var matches = [];

  lines.forEach(function(line, i) {
    if (re.test(line)) {
      matches.push({
        line: i + 1,
        match: line.match(re)[0]
      });
    }
  });
  return matches;
};