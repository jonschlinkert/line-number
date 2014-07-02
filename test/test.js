/*!
 * line-no <https://github.com/jonschlinkert/line-no>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var fs = require('fs');
var expect = require('chai').expect;
var lineNo = require('../');

var fixtures = function (filename) {
  return fs.readFileSync('test/fixtures/' + filename, 'utf8');
};

describe('lineNo:', function () {
  it('should get the line number', function () {
    var fixture = fixtures('README.md');
    var re = /.*npm.*/g;
    var expected = [
      {
        "line": 6,
        "match": "Install with [npm](npmjs.org):"
      },
      {
        "line": 9,
        "match": "npm i line-no --save-dev"
      }
    ];
    expect(lineNo(fixture, re)).to.eql(expected);
  });

  it('should get the line number', function () {
    var fixture = fixtures('LICENSE-MIT');
    var re = /Jon.+/g;
    var expected = [
      {
        "line": 1,
        "match": "Jon Schlinkert, contributors."
      }
    ];
    expect(lineNo(fixture, re)).to.eql(expected);
  });
});