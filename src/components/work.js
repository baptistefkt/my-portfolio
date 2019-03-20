import React from 'react'
import styled from 'styled-components'

import Image from '../components/image'

const PageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 90px 0 50px 0;

  h1 {
    font-size: 2.3rem;
    font-weight: 700;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 100;
  }
`

const FlexDiv = styled.div`
  display: flex;
`

const LeftSection = styled.div`
  flex: 2;
  margin-right: 1rem;
  padding: 0 1rem;
  height: 80vh;
  overflow-y: scroll;

  .gatsby-image-wrapper {
    margin: 0 5rem 3rem 0;
  }
`
const SummaryP = styled.p`
  width: 80%;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #888;
  position: relative;
  z-index: 100;
`

const RightSection = styled.div`
  flex: 1;
  margin-left: 1rem;
  padding: 2rem;
  /* border: 1px solid #fff1db; */
  border-radius: 10px;
  background-color: #fff8ef;
  z-index: 100;

  h2 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.3;
    color: #444;

    span {
      color: #437c90;
      font-size: 0.9rem;
      font-weight: 700;
      margin-left: 10px;
    }
  }

  a {
    color: #437c90;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Work = ({
  title,
  summary,
  year,
  type,
  role,
  techno,
  collab,
  images,
  link,
}) => (
  <PageWrapper>
    <h1>{title}</h1>
    <FlexDiv>
      <LeftSection>
        <SummaryP>{summary}</SummaryP>
        {images.map(image => (
          <Image imgName={image.name} />
        ))}
      </LeftSection>
      <RightSection>
        <h2>
          Project : <span>{title}</span>
        </h2>
        <h2>
          Year : <span>{year}</span>
        </h2>
        <h2>
          Type : <span>{type}</span>
        </h2>

        <h2>
          Role : <span>{role}</span>
        </h2>

        <h2>
          Technologies used : <span>{techno}</span>
        </h2>

        <h2>
          Collaboration : <span>{collab}</span>
        </h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          → Visit the website here
        </a>
      </RightSection>
    </FlexDiv>
  </PageWrapper>
)

export default Work
