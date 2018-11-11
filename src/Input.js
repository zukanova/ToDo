import React, { Component } from 'react'
import './App.css'

class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="  Add your Todo"
        className="Input"
        onKeyUp={event => {
          this.props.keyupfunction(event)
        }}
      />
    )
  }
}

export default Input
