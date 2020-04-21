// 模拟react中事务原理
function setState() {
  console.log('setState')
}
class Transaction {
  constructor(wrappers) {
    this.wrappers = wrappers; // wrapper有initialize close两个方法
  }
  perform(anyMethod) {
    this.wrappers.forEach(wrapper => wrapper.initialize());
    anyMethod.call();
    this.wrappers.forEach(wrapper => wrapper.close());
  }
}

let transaction = new Transaction([{
  initialize() {
    console.log('initialize')
  },
  close() {
    console.log('close')
  }
}]);
transaction.perform(setState);