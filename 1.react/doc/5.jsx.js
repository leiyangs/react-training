// 手写virtualdom 引入reactdom react
import React from "./react";
import ReactDom from "./react-dom";

// let element = React.createElement('h1', {
//   className: 'react',
//   id: "react",
//   style: {
//     color: 'blue',
//     fontSize: '25px'
//   },
// }, 'hello', React.createElement('span', null, 'react'));

function Welcome(props) {
  // return <h1 className="welcome" id="welcome">hello {props.name} {props.age}</h1>
  return React.createElement('h1', {className: "welcome", id: "welcome"}, "hello ", props.name, props.age)
}
class Welcome1 extends React.Component {
  // constructor(props) {
  //   super(props)// this.props = props;
  // }
  render() {
    return React.createElement('h1', {className: "welcome1", id: "welcome1", style: {
      color: 'blue', paddingTop: '10px'
    }}, "hello1 ", this.props.name, this.props.age)
  }
}
let element = React.createElement(Welcome1, {name: 'yang', age: 10});
ReactDom.render(element, document.getElementById('root'));