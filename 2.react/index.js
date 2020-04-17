// 父类和子类都是一个实例(new Counter)，所以父类可以调用子类方法，子类也可以调用父类方法

class Component {
  constructor(props) {
    this.props = props;
  }
  // DOM模板字符串转为真实DOM元素
  createDomFromDomString(domString) {
    let div = document.createElement('div');
    div.innerHTML = domString;
    return div.children[0];
  }
  // 状态变化重新创建dom并替换
  setState(particleState) {
    this.state = Object.assign(this.state, particleState);
    let oldElement = this.domElement;
    let newElement = this.renderElement();
    oldElement.parentElement.replaceChild(newElement, oldElement);
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

window.trigger = function (event, method) {
  // event.target.component == <button id="count-app" onclick="trigger(event, 'add')">${this.props.name}${this.state.number}</button>
  event.target.component[method].call(event.target.component, event);
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  add(event) {
    this.setState({number: this.state.number+1});
  }
  render() {
    return `<button id="count-app" onclick="trigger(event, 'add')">${this.props.name}${this.state.number}</button>`
  }
}