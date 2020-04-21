// 模拟react中事务原理
function setState() {
  console.log('setState')
}
class Transaction {
  constructor(wrappers) {
    this.wrappers = wrappers; // wrapper有initilize close两个方法
  }
  perform(anyMethod) {
    this.wrappers.forEach(wrapper => wrapper.initilize());
    anyMethod.call();
    this.wrappers.forEach(wrapper => wrapper.close());
  }
}

let transaction = new Transaction([{
  initilize() {
    console.log('initilize')
  },
  close() {
    console.log('close')
  }
}]);
transaction.perform(setState);