import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import './layout.css'

const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700,900');
  font-family: 'Nunito Sans', sans-serif;
  color: #222;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Nunito Sans', sans-serif;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AppContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </AppContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
