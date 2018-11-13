import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  height: 2rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border: solid 2px #303030;
  font-family: Arvo;
  font-size: 1.2rem;
`

export default class Input extends Component {
  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.value = ''
      input.focus()
    }
  }

  render() {
    return <StyledInput onKeyUp={this.handleKeyUp} placeholder="Add to-do" />
  }
}
