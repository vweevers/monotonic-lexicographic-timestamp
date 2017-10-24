'use strict'

const uli = require('unique-lexicographic-integer')

module.exports = function factory (opts) {
  const encode = uli(opts)

  return function mlts (ts) {
    return encode(ts == null ? Date.now() : +ts)
  }
}
