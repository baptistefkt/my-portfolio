import React from 'react'
import styled from 'styled-components'

import ProjectCard from './projectCard'

const WorkContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 30px 0;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.2rem 2rem;

  @media (max-width: 700px) {
    display: block;
  }
`

const WorksSection = () => (
  <WorkContainer>
    <ProjectCard
      imgLabel="gyuto-home.png"
      title="Gyütö"
      slug="gyuto"
      description="Custom website | Front-End development"
      tag="ReactJS"
    />
    <ProjectCard
      imgLabel="cuustomer-home.png"
      title="Cuustomer.com"
      slug="cuustomer"
      description="Web app | Front-end development, SEO optimisation"
      tag="NextJS"
    />
    <ProjectCard
      imgLabel="portfolio-home.png"
      title="Portfolio"
      slug="portfolio"
      description="Personal website | Desing &amp; Front-End"
      tag="Gatsby"
    />
  </WorkContainer>
)

export default WorksSection
