import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #eee;
  height: 200px;
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
)

Footer.propTypes = {
  // siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  // siteTitle: ``,
}

export default Footer
