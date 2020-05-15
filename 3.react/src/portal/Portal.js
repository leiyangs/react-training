import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
// 插槽
/**
 * Portals 提供了一种很好的方法，将子节点渲染到父组件 DOM 层次结构之外的 DOM 节点。
 */
class Modal extends Component {
  constructor() { 
    super();
  }
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('modal-root'));
  }
}
export default class Content extends Component {
  constructor() {
    super();
    this.state = {showModal: false}
  }
  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>打开模态框</button>
        {this.state.showModal && (
          <Modal>
            <div className="modal" id="modal">
              <div className="content" id="content">
                content
                <button onClick={this.toggleModal}>关闭模态框</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    )
  }
}