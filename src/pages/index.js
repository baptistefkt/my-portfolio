import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WorksSection from '../components/worksSection'

const HeaderSection = styled.section`
  background: #2948ff;
  background: -webkit-linear-gradient(to right bottom, #2948ff, #22c1c3);
  background: linear-gradient(to right bottom, #2948ff, #22c1c3);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  color: white;
  height: 130vh;
  padding: 80px 5%;

  h1 {
    font-size: 65px;
    font-weight: 700;
    width: 60%;
    max-width: 900px;
    margin: 2rem auto;
    margin-top: 20vh;
  }

  p {
    font-size: 30px;
    line-height: 1.3;
    width: 60%;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    h1 {
      width: 80%;
      font-size: 58px;
    }

    p {
      width: 80%;
      font-size: 26px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      width: 90%;
      font-size: 45px;
    }

    p {
      width: 90%;
      font-size: 20px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      margin-top: 15vh;
    }
  }
`

const H2 = styled.h2`
  margin-left: 7%;
  margin-top: 60px;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  z-index: 110;
  width: fit-content;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeaderSection>
      <h1>Baptiste Firket</h1>
      <p>
        Hi, I'm a web developer with a front-end penchant, but I also have a
        good understanding of the entire web development process. I'm passionate
        about the JavaScript ecosystem and new technologies.
      </p>
      {/* <p>
        I've learned how to code less than one year ago at BeCode school in
        Brussels. Really hard at the beginning... Now ? I'm making awesome apps
        and websites with the latest technologies and I'm absolutely loving what
        I do.
      </p> */}
    </HeaderSection>
    <H2>My Work</H2>
    <WorksSection data={data} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query allProjectQueryHome {
    allContentfulProject {
      edges {
        node {
          title
          summary {
            summary
          }
          slug
          screenshot {
            title
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
          year
          type
          role
          techno
          collab
          link
        }
      }
    }
  }
`
