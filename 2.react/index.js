class Counter {
  constructor() {
    this.state = {number: 0}
  }
  createDomFromDomString(domString) {
    let div = document.createElement('div');
    div.innerHTML = domString;
    return div.children[0];
  }
  add() {
    this.state = {number: this.state.number+1};
    let oldElement = this.domElement;
    let newElement = this.render();
    oldElement.parentElement.replaceChild(newElement, oldElement);
  }
  render() {
    this.domElement = this.createDomFromDomString(`<button id="count-app">${this.state.number}</button>`);
    this.domElement.addEventListener('click', this.add.bind(this))
    // this.domElement.addEventListener('click', () => {
    //   this.add() 
    // })
    return this.domElement;
  }
}