# monotonic-lexicographic-timestamp

**Monotonically increasing timestamp with lexicographic order. Simply adds a suffix if time is the same as the last call. Hex-encoded.**

[![npm status](http://img.shields.io/npm/v/monotonic-lexicographic-timestamp.svg?style=flat-square)](https://www.npmjs.org/package/monotonic-lexicographic-timestamp) [![node](https://img.shields.io/node/v/monotonic-lexicographic-timestamp.svg?style=flat-square)](https://www.npmjs.org/package/monotonic-lexicographic-timestamp) [![Travis build status](https://img.shields.io/travis/vweevers/monotonic-lexicographic-timestamp.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/monotonic-lexicographic-timestamp) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/monotonic-lexicographic-timestamp.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/monotonic-lexicographic-timestamp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Dependency status](https://img.shields.io/david/vweevers/monotonic-lexicographic-timestamp.svg?style=flat-square)](https://david-dm.org/vweevers/monotonic-lexicographic-timestamp)

## example

```js
const mlts = require('monotonic-lexicographic-timestamp')()

// You can provide your own date or timestamp
console.log(mlts(new Date(0))) // '00'
console.log(mlts(0)) // '00.01'

// Otherwise it'll use Date.now()
console.log(mlts())
console.log(mlts())

const custom = require('monotonic-lexicographic-timestamp')({
  separator: '!'
})

console.log(custom(1508832007017)) // 'ff080afa6b2a9370'
console.log(custom(1508832007017)) // 'ff080afa6b2a9370!01'
console.log(custom(1508832007017)) // 'ff080afa6b2a9370!02'
console.log(custom(1508832007018)) // 'ff080afa6b2a9378'
```

## api

### `mlts = require('monotonic-lexicographic-timestamp')([options])`

Options are passed to [`unique-lexicographic-integer`]:

- `options.separator` (string): defaults to `'.'`
- `options.strict` (boolean): opt-in to type-checking input. If true, `mlts()` will throw:
  - A `TypeError` if input is not a number or if `NaN`
  - A `RangeError` if input is < 0 or > `Number.MAX_SAFE_INTEGER`.

## see also

- [`monotonic-timestamp`]: if you want floats
- [`monotonic-timestamp-base36`]: if you want to save bytes
- [`lexicographic-integer`]: main encoding logic
- [`lexicographic-integer-encoding`]: encoding for `level(up)`
- [`unique-lexicographic-integer`]: `lexicographic-integer` plus a suffix if input is the same as the last call.

## install

With [npm](https://npmjs.org) do:

```
npm install monotonic-lexicographic-timestamp
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers

[`lexicographic-integer`]: https://github.com/substack/lexicographic-integer
[`lexicographic-integer-encoding`]: https://github.com/vweevers/lexicographic-integer-encoding
[`unique-lexicographic-integer`]: https://github.com/vweevers/unique-lexicographic-integer
[`monotonic-timestamp`]: https://github.com/dominictarr/monotonic-timestamp
[`monotonic-timestamp-base36`]: https://github.com/nathan7/monotonic-timestamp-base36
