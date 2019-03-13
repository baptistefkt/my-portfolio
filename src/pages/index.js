import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ProjectCard from '../components/ProjectCard'

const HeaderSection = styled.section`
  background-color: #333;
  color: white;
  height: 100vh;
  padding: 100px;

  span {
    text-decoration: underline;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeaderSection>
      <h1>ST KILDA</h1>
      <h1>
        S<sup>T</sup> KILDA
      </h1>
      <h1>
        S
        <span>
          <sup>t</sup>
        </span>{' '}
        KILDA
      </h1>
      <p>
        Hi, I'm a junior web developer with a front-end penchant, but I also
        have a good understanding of the entire web development process. I'm
        passionate about the JavaScript ecosystem and new technologies.
      </p>

      <h1>À PROPOS</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
        accusantium. Mollitia, incidunt quaerat. Odit, mollitia et? Amet
        obcaecati magnam ullam quos nulla nam dignissimos tenetur, atque omnis
        placeat, rem voluptates eligendi quibusdam. Molestiae omnis neque,
        dignissimos reprehenderit debitis tenetur recusandae.
      </p>
    </HeaderSection>
    <Image />
    <ProjectCard />
  </Layout>
)

export default IndexPage
