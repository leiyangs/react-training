import React, { Component } from 'react'

class Title extends Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

class Counter extends Component  {
  render() {
    return <div>{this.props.number}</div>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = { title: '计数器', number: 0 }
    this.inputRef = React.createRef();
  }
  add = () =>{
    this.setState({number: this.state.number+parseInt(this.inputRef.current.value)})
  }
  render() {
    return(
      <div>
        <Title title={this.state.title}/>
        <Counter number={this.state.number}></Counter>
        <input ref={this.inputRef}/>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}