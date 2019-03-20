import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WorksSection from '../components/worksSection'

const PageWrapper = styled.div`
  padding: 130px 0;

  h1 {
    margin-left: 7%;
    position: relative;
    z-index: 110;
    font-size: 2.5rem;
    font-weight: 700;
    width: fit-content;
  }
`

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <PageWrapper>
      <h1>My work</h1>
      <WorksSection />
    </PageWrapper>
  </Layout>
)

export default Work
