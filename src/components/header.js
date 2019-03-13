import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import CTA from './CTA'
import styled from 'styled-components'

const MyHeader = styled.header`
  background-color: #eee;
  opacity: 0.9;
  width: 100%;
  min-height: 70px;
  position: fixed;
  z-index: 100;
  padding: 0.5rem 4rem;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;

    li {
      margin: 0 20px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <MyHeader>
    <NavContainer>
      <div className="logoContainer">LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <CTA text="Contact me!" />
      </nav>
    </NavContainer>
  </MyHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
