import React from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import CTA from './CTA'

const MyHeader = styled.header`
  background-color: transparent;
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  min-height: 70px;
  padding: 0.5rem 7%;

  /* @media (max-width: 700px) {
    z-index: 250;
  } */
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
      opacity: 0.8;
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

    @media (max-width: 700px) {
      display: none;
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      margin: 0;

      li {
        margin: 0 16px;
        padding: 0 4px;
        /* border-radius: 5px; */

        &:last-of-type {
          margin-right: 60px;
        }

        &:hover {
          opacity: 0.7;
        }

        a {
          text-decoration: none;
          color: #ffca96;
          font-weight: 700;
          font-size: 0.9rem;
        }
      }
    }
  }
`

const BurgerButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 300;
  color: #ffca96;
  font-size: 1.6rem;
  border: none;
  background-color: transparent;
  outline: none;
  @media (min-width: 699px) {
    display: none;
  }
`

const BurgerMenu = styled.div`
  height: 101vh;
  width: 101vw;
  background-color: #282828;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 250;
  transform: ${props => props.position};
  transition: all 0.3s ease-in-out;
  padding: 100px 10px;

  .burgerNav {
    z-index: 300;
    display: block;

    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        padding: 15px 5px;
        transition: all 0.2s ease-in;
        width: 95%;
        border-bottom: 1px solid #444;
        border-radius: 0;

        a {
          font-size: 1.05rem;
          display: flex;
          justify-content: space-between;
        }

        &:last-of-type {
          margin-right: 20px;
        }

        &:hover {
          transform: none;
        }
      }
    }
  }
`

const Header = ({ menu, setMenu }) => {
  return (
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
          <CTA text="Contact Me" href="/about/#contact" />
        </nav>
        <BurgerMenu position={menu ? 'translateX(0)' : 'translateX(100%)'}>
          <nav className="burgerNav">
            <ul>
              <li>
                <Link to="/" onClick={() => setMenu(!menu)}>
                  Home
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/works" onClick={() => setMenu(!menu)}>
                  Work
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenu(!menu)}>
                  About
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </BurgerMenu>
        <BurgerButton onClick={() => setMenu(!menu)}>
          <FontAwesomeIcon icon={menu ? faTimes : faBars} />
        </BurgerButton>
      </NavContainer>
    </MyHeader>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
