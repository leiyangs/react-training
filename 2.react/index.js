// 父类和子类都是一个实例(new Counter)，所以父类可以调用子类方法，子类也可以调用父类方法

// 批量处理策略(strategy 策略)
let batchingStrategy =  {
  isBatchingUpdates: false, // 判断是否批量更新
  dirtyComponents: [], // 脏组件(组件的状态和界面显示不一致)
  batcheUpdates() {
    this.dirtyComponents.forEach(component => component.updateComponent())
  }
}
// 更新组件
class Updater{
  constructor(component) {
    this.component = component; // Component组件
    this.pendingStates = [];
  }
  addState(particleState) {
    this.pendingStates.push(particleState);
    // 如果是批量更新，放到队列中，如果不是直接更新
    batchingStrategy.isBatchingUpdates ? batchingStrategy.dirtyComponents.push(this.component) : this.component.updateComponent();
  }
}

class Component {
  constructor(props) {
    this.props = props;
    this.$updater = new Updater(this); // 传入Component组件
  }
  updateComponent() {
    this.$updater.pendingStates.forEach(particleState => {
      Object.assign(this.state, particleState);
    })
    this.$updater.pendingStates.length = 0;
    let oldElement = this.domElement;
    let newElement = this.renderElement();
    oldElement.parentElement.replaceChild(newElement, oldElement);
  }
  // DOM模板字符串转为真实DOM元素
  createDomFromDomString(domString) {
    let div = document.createElement('div');
    div.innerHTML = domString;
    return div.children[0];
  }
  // 状态变化重新创建dom并替换
  setState(particleState) {
    this.$updater.addState(particleState);
    // this.state = Object.assign(this.state, particleState);
    // let oldElement = this.domElement;
    // let newElement = this.renderElement();
    // oldElement.parentElement.replaceChild(newElement, oldElement);
  }
  // 添加事件
  renderElement() {
    this.domElement = this.createDomFromDomString(this.render());
    // 绑定事件的两种方式
    // this.domElement.addEventListener('click', this.add.bind(this))
    // this.domElement.addEventListener('click', () => {
    //   this.add()
    // })
    // 使DOM元素de component变为this
    this.domElement.component = this;
    return this.domElement;
  }
  mount(container) {
    container.appendChild(this.renderElement());
  }
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

let transaction = new Transaction(
  {
    initilize() {
      batchingStrategy.isBatchingUpdates = true; // 开启批量更新模式
      console.log('initilize')
    },
    close() {
      batchingStrategy.isBatchingUpdates = false;
      batchingStrategy.batcheUpdates(); // 进行批量更新，把所有的脏组件根据自己的状态和属性重新 渲染
      console.log('close')
    }
  }
)

window.$trigger = function (event, method) {
  // event.target.component == <button id="count-app" onclick="trigger(event, 'add')">${this.props.name}${this.state.number}</button>
  let component = event.target.component;
  transaction.perform(component[method].bind(component, event))
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  add(event) {
    this.setState({number: this.state.number+1});
    console.log(this.state)
    this.setState({number: this.state.number+1});
    console.log(this.state)
    setTimeout(() => {
      this.setState({number: this.state.number+1});
      console.log(this.state)
      this.setState({number: this.state.number+1});
      console.log(this.state)
    }, 100);
  }
  render() {
    return `<button id="count-app" onclick="$trigger(event, 'add')">${this.props.name}${this.state.number}</button>`
  }
}