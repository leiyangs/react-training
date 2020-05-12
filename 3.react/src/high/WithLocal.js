import React from 'react'
export default function(Comp, name) {
  return class extends React.Component{
    constructor() {
      super();
      this.state = {value: ''}
    }
    componentDidMount() {
      console.log('local')
      this.setState({
        value: localStorage.getItem(name)
      })
    }
    render() {
      return <Comp {...this.props} value={this.state.value}/>
    }
  }
}