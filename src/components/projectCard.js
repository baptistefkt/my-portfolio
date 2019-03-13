import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IMG_QUERY = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            src
          }
        }
      }
    }
  }
`

const ProjectCard = () => (
  <StaticQuery
    query={IMG_QUERY}
    render={data => (
      <div>
        {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
        {data.allImageSharp.edges.map(edge => (
          <p>{edge.node.fluid.src}</p>
        ))}
      </div>
    )}
  />
)

export default ProjectCard
