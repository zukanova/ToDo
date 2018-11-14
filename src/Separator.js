import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  margin: 0 10px;
  border-bottom: ${props => props.width || 4}px solid deeppink; /*dynamische Wert*/
`

const Text = styled.span`
  font-family: Arvo;
  white-space: nowrap;
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper>
        <Line width={4} />
        <Text>{this.props.text}</Text>
        <Line />
      </Wrapper>
    )
  }
}
