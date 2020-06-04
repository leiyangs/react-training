import test from 'tape' // 单元测试的库
import { incrementAsync } from './saga'
import {delay} from 'redux-saga'
import { call } from 'redux-saga/effects'

// 有两个参数 第一个是测试用例名，第二个是具体函数
test('incrementAsync saga test', function(assert) {
  let gen = incrementAsync();
  assert.deepEqual( // 深度比较两个返回值是否相等
    gen.next().value,
    call(delay,1000),
    "第一次执行应该会返回一个延迟1秒的promise"
  )
  assert.end();
});
