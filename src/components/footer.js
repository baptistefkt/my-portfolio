import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #282828;
  color: #aaa;
  text-align: center;
  min-height: 50px;
  padding: 1rem 2rem;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: #aaa;

    &:hover {
      color: #ddd;
    }
  }

  p {
    margin-bottom: 2px;
  }

  address {
    p {
      font-style: normal;
    }
  }
`

const Copyright = styled.div`
  margin-bottom: 1rem;
`

const Footer = () => (
  <StyledFooter>
    <Copyright>
      © {new Date().getFullYear()}, all rights reserved. This website was
      designed and developed by me with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {`  `}🚀
    </Copyright>
    <address>
      <p>baptistefirket@gmail.com</p>
      <p>+32 491 98 86 60</p>
    </address>
  </StyledFooter>
)

Footer.propTypes = {
  // siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  // siteTitle: ``,
}

export default Footer
