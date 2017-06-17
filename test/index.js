const assert = require('assert')
const hash = require('../lib/hashcode');

const getHash = (a, b) => [hash(a), hash(b)]

assert.equal(...getHash('Jason', 'Jason'))
assert.equal(...getHash(1, 1))
assert.equal(...getHash(-100000, -100000))
assert.equal(...getHash(null, null))
assert.notEqual(...getHash({ name: 'Jason'}, { name: 'Jason'}))
