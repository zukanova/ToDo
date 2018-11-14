import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  height: 70px;
  width: 120px;
  border: solid 2px #303030;
  margin-top: 10px;

  &.active {
    color: white;
    background-color: deeppink;
  }
`

export default class ToggleButton extends Component {
  state = {
    isDefault: this.props.isDefault //nur eien startwert dann wird ...
  }

  handleToggle = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state

    return (
      <Wrapper
        className={isDefault ? '' : 'active'}
        onClick={this.handleToggle}
      >
        {isDefault ? defaultText : alternativeText}
      </Wrapper>
    )
  }
}
