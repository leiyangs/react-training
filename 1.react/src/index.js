// state状态
import React from "react";
import ReactDom from "react-dom";

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date().toLocaleTimeString()};
//   }
//   componentDidMount() {
//     this.$timer = setInterval(() => {
//       this.setState({date: new Date().toLocaleTimeString()});
//     },1000)
//   }
//   render() {
//     return <div>时间：{this.state.date}</div>
//   }
// }



ReactDom.render(<Clock/>, document.getElementById('root'));

