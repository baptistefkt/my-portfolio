import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 0.4rem 1.1rem;
  color: white;
  background: linear-gradient(to right top, #ffca96, #fd9653);
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: 700;
  z-index: 100;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    /* opacity: 0.9; */
    background: linear-gradient(to right, #ffca96, #fd9653);
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }
`

const CTA = ({ text, href }) => {
  return (
    <Link to={href}>
      <Button>{text}</Button>
    </Link>
  )
}

CTA.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
}

CTA.defaultProps = {
  text: `Click me`,
  href: `/`,
}

export default CTA
