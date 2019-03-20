import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WorksSection from '../components/worksSection'

const HeaderSection = styled.section`
  background: #2948ff;
  background: -webkit-linear-gradient(to right bottom, #2948ff, #22c1c3);
  background: linear-gradient(to right bottom, #2948ff, #22c1c3);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  color: white;
  height: 300vh;
  padding: 180px 5%;

  h1 {
    font-size: 65px;
    font-weight: 700;
    width: 60%;
    margin: 2rem auto;
  }

  p {
    font-size: 30px;
    line-height: 1.3;
    width: 60%;
    margin: 0 auto;
  }

  p:last-of-type {
    margin-top: 110vh;
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeaderSection>
      <Grid container>
        <Grid item xs={12}>
          <h1>Baptiste Firket</h1>
          <p>
            Hi, I'm a junior web developer with a front-end penchant, but I also
            have a good understanding of the entire web development process. I'm
            passionate about the JavaScript ecosystem and new technologies.
          </p>
          <p>
            Hi, I'm a junior web developer with a front-end penchant, but I also
            have a good understanding of the entire web development process. I'm
            passionate about the JavaScript ecosystem and new technologies.
          </p>
        </Grid>
      </Grid>
    </HeaderSection>
    <H2>My Work</H2>
    <WorksSection />
  </Layout>
)

export default IndexPage
