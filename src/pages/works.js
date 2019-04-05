import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WorksSection from '../components/worksSection'

const PageWrapper = styled.div`
  padding: 110px 0;

  h1 {
    margin-left: 7%;
    position: relative;
    z-index: 110;
    font-size: 2.2rem;
    font-weight: 400;
    width: fit-content;
  }
`

const Work = ({ data }) => (
  <Layout>
    <SEO title="Work" />
    <PageWrapper>
      <h1>My work</h1>
      <WorksSection data={data} />
    </PageWrapper>
  </Layout>
)

export default Work

export const query = graphql`
  query allProjectQuery {
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
          order
        }
      }
    }
  }
`
