import React, { Component } from 'react'
import './App.css'

import Todo from './Todo'
import Input from './Input'

class App extends Component {
  state = {
    todos: [
      { text: 'lernen', done: false },
      { text: 'schlafen', done: false },
      { text: 'essen', done: false }
    ]
  }

  toggleDone = index => {
    const { todos } = this.state
    const newArr = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: newArr
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
        <div>
          {this.state.todos.map((todo, index) => (
            <Todo
              key={index}
              isDone={todo.done}
              text={todo.text}
              click={() => this.toggleDone(index)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
