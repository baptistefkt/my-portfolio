import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #282828;
  color: #aaa;
  text-align: center;
  min-height: 50px;
  padding: 1rem 0;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: #aaa;

    &:hover {
      color: #ddd;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, all rights reserved. This website is designed
    and developed by me with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    {` `}❤
  </StyledFooter>
)

Footer.propTypes = {
  // siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  // siteTitle: ``,
}

export default Footer
