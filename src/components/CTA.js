import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 0.4rem 1.1rem;
  color: white;
  background: linear-gradient(to right top, #ffca96, #fd9653);
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: bold;
  z-index: 100;
  transition: 0.1s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }
`

const CTA = props => (
  <Link to="/about/#contact">
    <Button>{props.text}</Button>
  </Link>
)

export default CTA
