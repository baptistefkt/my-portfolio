import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 0.7rem 1.4rem;
  color: white;
  background-color: aquamarine;
`

const CTA = props => <Button>{props.text}</Button>

export default CTA
