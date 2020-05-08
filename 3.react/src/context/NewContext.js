import React, { Component } from 'react';
const ThemeContext = React.createContext(); //是一个对象  {Consumer: {}, Provider: {}}

class Header extends Component {
  render() {
    return <div style={{border: '5px solid green', padding: '15px'}}>
      Header
      <Title></Title>
    </div>
  }
}
// 类组件用ThemeContext
class Title1 extends Component {
  static contextType = ThemeContext;
  render() {
    return <div style={{border: '5px solid blue', padding: '15px', color: this.context.color}}>
      Title
    </div>
  }
}
// 函数组件用Consumer
function Title() {
  return (
    <ThemeContext.Consumer>
      {
        value => (
          <div style={{border: '5px solid blue', padding: '15px', color: value.color}}>
            Title
          </div>
        )
      }
    </ThemeContext.Consumer>
    
  )
}
class Main extends Component {
  render() {
    return <div style={{border: '5px solid orange', padding: '15px'}}>
      Main
      <Content></Content>
    </div>
  }
}
class Content extends Component {
  static contextType = ThemeContext;
  render() {
    return <div style={{border: '5px solid black', padding: '15px', color: this.context.color}}>
      Content
      <button onClick={()=> this.context.setColor('red')}>变红</button>
      <button onClick={()=> this.context.setColor('green')}>变绿</button>
    </div>
  }
}
export default class Page extends Component {
  setColor = (color) => {
    this.setState({color});
  }
  constructor(props) {
    super(props);
    this.state = { color: 'gray' }
  }
  render() {
    let ctx = {color: this.state.color,setColor: this.setColor}
    return (
      <ThemeContext.Provider value={ctx}>
        <div style={{border: '5px solid red', padding: '15px'}}>
          Page
          <Header>
            <Title></Title>
          </Header>
          <Main>
            <Content></Content>
          </Main>
        </div>
      </ThemeContext.Provider>
    )
  }
}
