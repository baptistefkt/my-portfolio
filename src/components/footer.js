import React from 'react'
import styled from 'styled-components'

import contentfulLogo from '../images/contentful.png'

const StyledFooter = styled.footer`
  background-color: #282828;
  color: #aaa;
  text-align: center;
  min-height: 50px;
  padding: 2rem;
  padding-bottom: 0.8rem;
  font-size: 0.7rem;

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
    margin-bottom: 0;

    p {
      font-style: normal;
    }
  }
`

const Copyright = styled.div`
  margin-bottom: 1rem;

  span {
    img {
      width: 14px;
      margin: 0 2px;
      vertical-align: middle;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <Copyright>
      © {new Date().getFullYear()}, all rights reserved. This website was
      designed and developed by me with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby </a>
      {`  `}🚀 and <a href="https://www.contentful.com/">Contentful</a>{' '}
      <span>
        <img src={contentfulLogo} alt="contentful logo" />
      </span>
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
