import test from 'tape' // 单元测试的库
import { incrementAsync, readAsync, readfile } from './saga'
import * as types from './action-types'
import { delay, put, cps } from 'redux-saga/effects'

// 有两个参数 第一个是测试用例名，第二个是具体函数
test('incrementAsync saga test', function(assert) {
  let gen = incrementAsync();
  let obj = {name: 'yang'}
  assert.deepEqual( // 断言库 深度比较两个返回值是否相等
    gen.next().value,
    delay(1000),
    "第一次执行应该会返回一个延迟1秒的promise"
  )
  assert.deepEqual(
    gen.next().value,
    put({type: types.INCREMENT})
  )
  assert.end();
});

test('incrementAsync saga test', function(assert) {
  let gen = readAsync();
  assert.deepEqual(
    gen.next().value,
    cps(readfile, 'README.md'),
    "should return README.md"
  )
  assert.deepEqual(
    gen.next(),
    {value: undefined, done: true},
    'should done'
  )
  assert.end();
})
