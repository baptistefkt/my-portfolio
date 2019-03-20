import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageWrapper = styled.div`
  background-color: #282828;
  color: #ddd;
  padding: 130px 5%;

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: white;
    width: fit-content;
  }

  h1,
  h2 {
    font-size: 2.2rem;
  }
`

const FlexSection = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

const LeftSection = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  position: relative;
  z-index: 110;

  span {
    color: #ffca96;
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

const HereA = styled.a`
  text-decoration: none;
  color: #ffca96 !important;
`

const ExperienceDiv = styled.div``

const RightSection = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  position: relative;
  z-index: 110;
`

const P = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding-top: 150px;
  font-size: 1.3rem;
`

const Contact = styled.div`
  text-align: center;
  width: 310px;
  margin: 20vh auto;
  padding: 1rem 2rem;
  position: relative;
  z-index: 110;
  color: #ddd;
  border: 1px solid #ffca96;
  border-radius: 5px;

  h3 {
    margin-bottom: 0.5rem;
  }

  h5 {
    margin-bottom: 0.4rem;
    color: #ddd;

    a {
      color: #ddd;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-start;

  span {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`

const Github = styled.span`
  a {
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAC0klEQVRIib2WPWhVaRCG3zlcLhcJATWIiEVKCVtYLBIWkSAWWggWEiysZEm9WlnYWYqILBYibreVIIsigssSsoviX2GhxSJBIYUalSUaf/G+j0W+c/1ycs7dG5DMbb6fmXln5pt5zw2E1kqKNUOS1FqNMqYdESPAuoh4D7yKIj5/HzBUSNoEjEfEfqFxSUOSCsCSFoVuS7oK3I6IeYXcx1/9z/aQ7UnbM0DXNqWUa9vlugtMA5PAUJPP+mMogNO2X+TOc6mepf0L4BRQDARme4PtC9UM6rLqc3be9oa+YLbbwDHgbTKeAc4B/6ZS1WXWBR7Z/tX2P+lsIflp5/5j2Zyh7ZKuS9os6Yuko8BvEbFJ0gGgHRFPgTcRMSxpVNJHSVckzUv6WdLp1HjPgX1RxIP6BoGL2cN/AI40PXbDW08Bn7LGuZDfFxnqVkkTgCJCESFJLcxgg7/kqyWpZw/sTn4lLWeQXcBItr8l6Y8oonluclmar8vJTinoEWBnHdiopE7KSMBdheYHAvoG+By4L6nMrBMRoyvAgPWSWtBrmGerAirxIp5l65akjeW+lV30ypVK0FNapWwsfSRxaKlaeRkXtNTuZXP8IFZH1EJtYKz0ERFfIuK/8joHeyhpMYtoh6Q9yzq2P1AB7ImIH3tHsJj8ljo99thqezYjiS4wA+wYcMZ+Am6WTJPmbBbYsoKubBe2zyalS8BxYA6YS1w5CQxXAIZtH0pkMGe7WyHoM7aLFWDJeAyYTewxZfsw8DoxwkIeZQpwC7DQQM6PgW2DEvE9YJftyZTlwYby3akh57fAL1UirjNuAyeAd8A123uB8WqUmf50BegDcNx2u6rb9NjrbJ8EXqfPxRPg9zpd29MZ0EvbJ2136nQbu8t2x/Zu4K8EerUhsOvp/k9gAqgFQtXvWd34mE5ETEiyQjdq7vdKckT8rdDHfr7+F+x7ypr+Sf0K3sJcaLTX8Q8AAAAASUVORK5CYII='),
      auto;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Linkedin = styled.span`
  a {
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACG0lEQVRIib2WMWsUURSFvzMsiwQJIYgESSdoCCIIIhYSMKUWtuJfsLTyF/gLBLs0FoL4FwQ7EYSgjZViiFZxDcuC6xrvscjM+OZlhl1w3TPN3Pfufefe+857MzJmESgWwgL0UsPhLUm3gSPbz1Vod25MLp+IuGX7S0T8tv0rIt7bvmbm89Stk3QTWJNUAD1Jm8Dl1OdfUC9i+xMwTuwRMEDEPIjqPZL0FDhve0vSEfACeDkPEgA15G2WgHNAAPuIydyJHF6VdAPo28djkt4g9jCXgI1k/BB4DRS2Nzne2x4wBD6USTZbXuvCvm77m5u4V849ysbfRsS27R3bnyPiZ6nW77ZfRcRd2/1UdY1zBGAbSdM6sS7pMXDBdiEJ29heAbYkXQVWgCdVwAnpdpFUbStxFtgAity/tJeABw6vdxK1LZ6RVNgD7gNXbN+R9C6bX5O0XRknWteByDIf2H4IPFOhENp1GEk7wGrpcwq4WAV0VpRVUWT2V0m7KpQq6yOwn8T3bC9PrSitoHqvhGJ7AkxEw2cEjLKYev3Witr2JFXjNFW2xbcStS00g+RrgrQDnUTpZNf7LGQ5Zj5Hs1SU+uUHv0GUZ9PWgi7k1eeJpao7kjQAInEcl4Q/bB9UV42kYfkpSZMKYGj7ICEeVcr8+5k4vvfOpHeXpAFijFm2fToZnwCHiJrM4QJYldRP+EeIYZPoP2Nhv1sLI/oDD392zwlzLVAAAAAASUVORK5CYII='),
      auto;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Twitter = styled.span`
  a {
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACHUlEQVRIid2WMWtUQRSFz30sKcKSQlJIWFKJ9aKNhIBgJZrfYZnaws7KUlBCCAHBIqRIJ1iLghY2IloIIipIIhgFdZOwm/NZZDbMzr63qUyRMzzee8Ode+aee+cygdBpoDoVljNJ1BqbQZVCPnElmpJ0CbgZETOS3kl6ImlbUgVMS+pFFYNknw2Yt30LmEHNw3bb9jpwAGCbhE/AbWDd9kq+pnSwCPwE7ts+V0sDle1loF+QDHEIvAGWgW4tEXAdOLR9CDyzfQOYKmw6tp8PCcp3wh6wnq8tI+oCn7MFO8CG7SXbs0Ab6AJvayLJsQmMKFISTQN3bR/YZvgkOb4CT21v2t5piISkyL1S8pGqi4gucDEitoH54wKDSlJHUicihnMClP8nDCT9OKm8exGxkJweO2lCTpLZ7gPvS9uRAwt8kPRIUi+bG3lOIJGk3Yh4PbarmvJtA3eAjyk3jdVV5ifldGXMp6hpQaE/aecGXOaiLpLM5ouk1TqZm3rdC0lTklq5LHUSZoT7wFpEjOWnXrp0+oErwBZHbaVfJ1OGPvAYaDe1rQkd7agLABvAXhOR7b7tLaAzyVcrC62SdEHSnKTzwNVQLKXvVkSUuTLwXdJDSQ8U+tWQhlHpbFfAArBm+3d53IvK+mt7FbhmuzVRlTQCjd4ZMK2ImJW0KOkyMCdpOiJ6wLeIeCnplaRdhQYTo8gwRvS/cPbuDGeP6B86XWMc5OZt8gAAAABJRU5ErkJggg=='),
      auto;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <PageWrapper>
      <FlexSection>
        <LeftSection>
          <h1>I'm Baptiste Firket</h1>
          <p>
            Here is a summary of who I am and what I do. For more details, you
            can find my full resume{' '}
            <HereA
              href="/Baptiste-Firket-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </HereA>
          </p>

          <ExperienceDiv>
            <h2>Experience</h2>
            <h3>
              <a href="http://www.cuustomer.com">cuustomer.com</a>
            </h3>
            <p>
              <em>
                " I worked with Baptiste in the context of an early stage
                startup for which I defined the technical strategy and acted as
                interim CTO. Baptiste came across as very motivated and eager to
                learn, which are key aspects that I typically look for when
                hiring young professionals. That aspect, combined to the fact
                that he had the opportunity to work with a state-of-the-art web
                stack, would make him a very good addition to a web team as a
                junior developer "
              </em>
            </p>
            <p>
              <span>
                - Thibaut Van Spaandonck - Founder &amp; Principal Consultant at
                Urge2code
              </span>
            </p>
          </ExperienceDiv>
        </LeftSection>
        <RightSection>
          <h2>What I Do</h2>
          <h3>Front End</h3>
          <p>
            HTML5, CSS3, SASS, JavaScript, ReactJS, NextJS, Gatsby,
            Styled-components, CSS Frameworks (Bootstrap, Bulma, Material UI),
            Apollo-graphQL
          </p>
          <h3>Back End</h3>
          <p>NodeJS, ExpressJS, GraphQL, MySQL, PostgressQL</p>
          <h3>Tools</h3>
          <p>Git, Contentful, Algolia, Figma, Wordpress</p>
        </RightSection>
      </FlexSection>
      <P id="contact">
        If you need more informations, want to discuss or even hire me, feel
        free to reach out :
      </P>
      <Contact>
        <h3>Baptiste Firket</h3>
        <h4>Web Developer</h4>
        <h5>
          <a href="mailto:baptistefirket@gmail.com">baptistefirket@gmail.com</a>
        </h5>
        <h5>+32 491 98 86 60</h5>
        <FlexDiv>
          <Github>
            <a href="https://github.com/baptistefkt">github</a>
          </Github>
          <Linkedin>
            <a href="https://www.linkedin.com/in/baptiste-firket-7b6334101/">
              linkedin
            </a>
          </Linkedin>
          <Twitter>
            <a href="https://twitter.com/baptistefkt">twitter</a>
          </Twitter>
        </FlexDiv>
      </Contact>
    </PageWrapper>
  </Layout>
)

export default About
