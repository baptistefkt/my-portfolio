import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

import ProjectCard from './ProjectCard'

const WorkContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 30px 0;
  margin-bottom: 100px;
`

const WorksSection = props => (
  <WorkContainer>
    <Grid container>
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
        imgLabel="gyuto-music.png"
        title="Portfolio"
        slug="portfolio"
        description="Custom website | Desing &amp; Front-End"
        tag="Gatsby"
      />
    </Grid>
  </WorkContainer>
)

export default WorksSection
