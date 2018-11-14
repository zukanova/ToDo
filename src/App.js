import React, { Component } from 'react'
import uid from 'uid'
import './App.css'

import Todo from './Todo'
import Input from './Input'
import Separator from './Separator'
import ToggleButton from './ToggleButton'

class App extends Component {
  state = {
    todos: this.load()
  }

  toggleDone = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const todo = todos[index]

    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todo, done: !todo.done },
        ...todos.slice(index + 1)
      ]
    })
  }

  deleteListItem = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  }

  addTodo = value => {
    const newEntry = [
      { text: value, done: false, id: uid() },
      ...this.state.todos
    ]

    this.setState({
      todos: newEntry
    })
  }

  renderOpenTodos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map(this.renderSingleTodo)
  }

  renderDoneTodos() {
    return this.state.todos.filter(todo => todo.done).map(this.renderSingleTodo)
  }

  renderSingleTodo = todo => (
    <Todo
      key={todo.id}
      text={todo.text}
      done={todo.done}
      onToggle={() => this.toggleDone(todo.id)}
      onDelete={() => this.deleteListItem(todo.id)}
    />
  )

  render() {
    this.save()
    return (
      <div className="App">
        <Input onEnter={this.addTodo} />

        <Separator text="TODO" />
        {this.renderOpenTodos()}
        <Separator text="DONE" />
        {this.renderDoneTodos()}

        <ToggleButton
          defaultText="Foo"
          alternativeText="Bar"
          onClick={() => console.log('click')}
          isDefault={true}
        />
      </div>
    )
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }
}

export default App
