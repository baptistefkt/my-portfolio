import React, { useState } from 'react'
import PropTypes from 'prop-types'
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

const Main = styled.main`
  filter: ${props => props.isOpen};
`

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false)

  return (
    <AppContainer>
      <Header menu={menu} setMenu={setMenu} />
      <Main
        isOpen={menu ? 'contrast(60%) !important' : 'contrast(100%) !important'}
      >
        {/* <Main isOpen={menu ? 'brightness(0.6)' : 'brightness(1)'}></Main> */}
        {children}
      </Main>
      <Footer />
    </AppContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
