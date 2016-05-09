var test = require('ava');
var Vue = require('vue');
var ElInput = require('../dist/index.js');

test('el-select', t => {
  t.truthy(ElInput.install);
});
