import React, { Component } from 'react'
import './App.css'

class Todo extends Component {
  render() {
    const { text, onToggle, isDone, onDelete } = this.props
    return (
      <div className="list-item">
        <span onClick={onToggle} className={isDone ? 'done' : ''}>
          <input type="checkbox" className="checkbox" />
          {text}
        </span>
        <button onClick={onDelete} className="delete-button">
          &times;
        </button>
      </div>
    )
  }
}

export default Todo
