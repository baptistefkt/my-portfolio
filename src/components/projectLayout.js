import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Layout from './layout'
import SEO from './seo'

const PageWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 90px 0 50px 0;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 1rem;
    margin-bottom: 0.8rem;
    position: relative;
    z-index: 100;

    @media (max-width: 700px) {
      margin-left: 0;
    }
  }
`

const FlexDiv = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const LeftSection = styled.div`
  flex: 2;
  margin-right: 1rem;
  padding: 0 1rem;
  height: 100vh;
  overflow-y: scroll;

  .gatsby-image-wrapper {
    margin: 0 5rem 3rem 0;
  }

  @media (max-width: 700px) {
    overflow-y: unset;
    height: unset;
    margin-right: 0;
    padding: 0;

    .gatsby-image-wrapper {
      margin: 0;
      margin-bottom: 2rem;
    }
  }
`
const SummaryP = styled.p`
  width: 80%;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #777;
  position: relative;
  z-index: 100;

  @media (max-width: 700px) {
    width: 95%;
  }
`

const RightSection = styled.div`
  flex: 1;
  margin-left: 1rem;
  height: fit-content;
  padding: 2rem;
  /* border: 1px solid #fff1db; */
  border-radius: 4px;
  background-color: #fff8ef;
  z-index: 100;

  @media (max-width: 700px) {
    margin-left: 0;
  }

  h2 {
    color: #437c90;
    font-size: 22px;

    svg {
      font-size: 16px;
      margin-left: 8px;
      margin-bottom: 1px;
    }
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    color: #437c90;
    font-weight: 700;
  }

  p {
    color: #7eaab7;
    font-size: 15px;
    margin-bottom: 0.8rem;
  }

  div {
    border-radius: 30px;
    border: 2px solid #437c90;
    width: fit-content;
    padding: 8px 15px;
    margin-top: 2rem;

    &:hover {
      opacity: 0.85;
    }

    a {
      color: #437c90;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.8rem;
      text-align: center;
    }
  }
`

const ProjectLayout = ({ data }) => {
  const {
    title,
    summary,
    screenshot,
    year,
    type,
    role,
    techno,
    collab,
    link,
  } = data.contentfulProject
  console.log(typeof link)
  return (
    <Layout>
      <SEO title={title} />
      <PageWrapper>
        <h1>{title}</h1>
        <FlexDiv>
          <LeftSection>
            <SummaryP>{summary.summary}</SummaryP>
            {screenshot.map((item, index) => (
              <Img key={index} fluid={item.fluid} alt={item.title} />
            ))}
          </LeftSection>
          <RightSection>
            <h2>
              Project info <FontAwesomeIcon icon={faInfoCircle} />
            </h2>
            <h3>Name :</h3>
            <p>{title}</p>
            <h3>Year :</h3>
            <p>{year.substring(0, 4)}</p>
            <h3>Type :</h3>
            <p>
              {type.map((item, index) =>
                type.length === index + 1 ? `${item}` : `${item}, `
              )}
            </p>
            <h3>Role : </h3>
            <p>
              {role.map((item, index) =>
                role.length === index + 1 ? `${item}` : `${item}, `
              )}
            </p>
            <h3>Technologies : </h3>
            <p>
              {techno.map((item, index) =>
                techno.length === index + 1 ? `${item}` : `${item}, `
              )}
            </p>
            {collab !== null && (
              <>
                <h3>Collaboration : </h3>
                <p>
                  {collab.map((item, index) =>
                    collab.length === index + 1 ? `${item}` : `${item}, `
                  )}
                </p>
              </>
            )}
            {link !== null && (
              <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link.includes('github')
                    ? '→ Visit the Repository'
                    : '→ Visit the Website'}
                </a>
              </div>
            )}
          </RightSection>
        </FlexDiv>
      </PageWrapper>
    </Layout>
  )
}

export default ProjectLayout

export const query = graphql`
  query ProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
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
`
