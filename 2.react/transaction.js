// 模拟react中事务原理
function setState() {
  console.log('setState')
}
class Transaction {
  constructor(wrapper) {
    this.wrapper = wrapper; // wrapper有initilize close两个方法
  }
  perform(anyMethod) {
    this.wrapper.initilize();
    anyMethod.call();
    this.wrapper.close();
  }
}

let transaction = new Transaction({
  initilize() {
    console.log('initilize')
  },
  close() {
    console.log('close')
  }
});
transaction.perform(setState);