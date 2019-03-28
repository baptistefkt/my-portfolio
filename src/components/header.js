import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CTA from './CTA'

const MyHeader = styled.header`
  background-color: transparent;
  width: 100%;
  min-height: 70px;
  position: fixed;
  z-index: 10;
  padding: 0.5rem 7%;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  .logoContainer {
    text-align: center;
    padding-top: 16px;
    transition: 0.2s ease-in;

    &:hover {
      transform: skewY(8deg);
      opacity: 0.9;
    }

    h2 {
      font-size: 2rem;
      color: #ffca96;
      transform: skewY(-8deg);
    }
  }

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
      transition: all 0.2s ease-in;

      &:last-of-type {
        margin-right: 60px;
      }

      &:hover {
        transform: skewY(-8deg);
      }

      a {
        text-decoration: none;
        color: #ffca96;
        font-weight: 700;
        font-size: 0.9rem;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <MyHeader>
    <NavContainer>
      <Link to="/">
        <div className="logoContainer">
          <h2>bfkt.dev</h2>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <CTA text="Contact Me" />
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
