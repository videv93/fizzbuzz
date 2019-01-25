'use strict'

module.exports = function (n) {
  var res = []
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('fizzbuzz')
    } else if (i % 3 === 0) {
      res.push('fizz')
    } else if (i % 5 === 0) {
      res.push('buzzz')
    } else {
      res.push(i)
    }
  }
  return res
}
