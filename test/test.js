'use strict';

var expect = require('chai').expect;
var fizzbuzz = require('../index');

describe('#fizzbuzz', function () {
  it('should return [1]', function () {
    var result = fizzbuzz(1);
    expect(result).to.eql([1]);
  });

  it('should return [1,2]', function () {
    var result = fizzbuzz(2);
    expect(result).to.eql([1, 2]);
  });
});