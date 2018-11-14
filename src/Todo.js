import React, { Component } from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
  background-color: rgba(245, 245, 245, 0.324);
  border: solid 2px #303030;
  font-family: Arvo;
  font-size: 1.3rem;
  color: #303030;
`

const DeleteButton = styled.button`
  font-size: 1.5rem;
  color: #303030;
`

const Text = styled.div`
  &.done {
    text-decoration: line-through;
    color: #505050;
    margin-bottom: 10px;
  }
`

class Todo extends Component {
  render() {
    const { text, onToggle, done, onDelete } = this.props
    return (
      <ListItem>
        <Text onClick={onToggle} className={done ? 'done' : ''}>
          <input type="checkbox" className="checkbox" />
          {text}
        </Text>
        <DeleteButton onClick={onDelete}>&times;</DeleteButton>
      </ListItem>
    )
  }
}

export default Todo
