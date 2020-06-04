import test from 'tape' // 单元测试的库
import { incrementAsync } from './saga'
import * as types from './action-types'
import { delay, put, call } from 'redux-saga/effects'

// 有两个参数 第一个是测试用例名，第二个是具体函数
test('incrementAsync saga test', function(assert) {
  let gen = incrementAsync();
  let obj = {name: 'yang'}
  assert.deepEqual( // 断言库 深度比较两个返回值是否相等
    gen.next().value,
    call([obj,delay], 1000),
    "第一次执行应该会返回一个延迟1秒的promise"
  )
  assert.deepEqual(
    gen.next().value,
    put({type: types.INCREMENT})
  )
  assert.end();
});
