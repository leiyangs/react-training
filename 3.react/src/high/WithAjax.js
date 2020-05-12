import React from 'react'

export default function(Comp) {
  return class extends React.Component{
    constructor() {
      super();
      this.state = { value: '' }
    }
    componentDidMount() {
      console.log('ajax')
      fetch('http://localhost:3000/translation.json').then(res => res.json()).then(response => {
        console.log(response)
        this.setState({
          value: response[this.props.value]
        })
      })
    }
    render() {
      return <Comp {...this.props} value={this.state.value}/>
    }
  }
}