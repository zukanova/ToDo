import React, { Component } from 'react'
import './App.css'

class Todo extends Component {
  render() {
    const { text, onToggle, isDone, onDelete } = this.props
    return (
      <li>
        <span onClick={onToggle} className={isDone ? 'done' : ''}>
          {text}
        </span>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}

export default Todo
