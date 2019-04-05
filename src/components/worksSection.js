import React from 'react'
import styled from 'styled-components'

import ProjectCard from './projectCard'

const WorkContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;
  padding: 30px 0;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.2rem 2rem;

  @media (max-width: 700px) {
    display: block;
  }
`

const WorksSection = ({ data }) => {
  return (
    <WorkContainer>
      {data.allContentfulProject.edges
        .sort((a, b) => {
          return a.node.order - b.node.order
        })
        .map(({ node }) => {
          const {
            title,
            summary,
            slug,
            screenshot,
            year,
            type,
            role,
            techno,
            collab,
            order,
          } = node
          return (
            <ProjectCard
              key={order}
              img={screenshot}
              title={title}
              slug={slug}
              summary={summary}
              year={year}
              type={type}
              role={role}
              techno={techno}
              collab={collab}
            />
          )
        })}
    </WorkContainer>
  )
}

export default WorksSection
