'use strict'

$(document).ready(function() {
  let n = $('.htmlcssjs').length - 1
  $('.htmlcssjs-span').text(n)

  let n2 = $('.wordpress').length - 1
  $('.wordpress-span').text(n2)

  let n4 = $('.pureJs').length - 1
  $('.pureJsSpan').text(n4)

  let n5 = $('.react').length - 1
  $('.reactSpan').text(n5)

  $('.all-span').text(n + n2 + n4 + n5)
})
