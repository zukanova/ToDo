import React, { Component } from 'react'
import './App.css'

import Todo from './Todo'
import Input from './Input'

class App extends Component {
  state = {
    todos: [
      { text: 'lernen', done: false },
      { text: 'schlafen', done: false },
      { text: 'essen', done: false },
      { text: 'spazieren', done: false },
      { text: 'daddeln', done: false }
    ]
  }

  toggleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: newTodos
    })
  }

  deleteListItem = index => {
    const { todos } = this.state
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: newTodos
    })
  }

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ] //new entry, ...old entries

      this.setState({
        todos: newEntry
      })
      event.target.value = '' // delete input entry
    }
  }

  render() {
    return (
      <div className="App">
        <Input keyupfunction={this.addTodoArray} />
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todo
              key={index}
              isDone={todo.done}
              text={todo.text}
              onToggle={() => this.toggleDone(index)}
              onDelete={() => this.deleteListItem(index)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
