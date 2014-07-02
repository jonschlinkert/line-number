/*!
 * line-number <https://github.com/jonschlinkert/line-number>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var fs = require('fs');
var expect = require('chai').expect;
var lineNumber = require('../');

var fixtures = function (filename) {
  return fs.readFileSync('test/fixtures/' + filename, 'utf8');
};

describe('lineNumber:', function () {
  it('should get the line number', function () {
    var fixture = fixtures('README.md');
    var re = /npm/;
    var expected = [
      {
        "line": "Install with [npm](npmjs.org):",
        "number": 6,
        "match": "npm"
      },
      {
        "line": "npm i line-number --save-dev",
        "number": 9,
        "match": "npm"
      }
    ];
    var actual = lineNumber(fixture, re);
    expect(actual).to.eql(expected);
  });

  it('should get the line number', function () {
    var fixture = fixtures('LICENSE-MIT');
    var re = /Jon[^,]+/g;
    var expected = [
      {
        "line": "Copyright (c) 2014 Jon Schlinkert, contributors.",
        "number": 1,
        "match": "Jon Schlinkert"
      }
    ];
    var actual = lineNumber(fixture, re);
    expect(actual).to.eql(expected);
  });
});