'use strict'

module.exports = {
  fizzbuzz: function (n) {
    for (var i = 0; i < n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } else if (i % 3 === 0) {
        console.log('fizz')
      } else if (i % 5 === 0) {
        console.log('buzzz')
      } else {
        console.log(i)
      }
    }
  }
}
