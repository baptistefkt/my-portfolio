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
    margin-bottom: 0.8rem;
    position: relative;
    z-index: 100;

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
`

const FlexDiv = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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

  @media (max-width: 600px) {
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
  color: #888;
  position: relative;
  z-index: 100;

  @media (max-width: 600px) {
    width: 95%;
  }
`

const RightSection = styled.div`
  flex: 1;
  margin-left: 1rem;
  padding: 2rem;
  /* border: 1px solid #fff1db; */
  border-radius: 4px;
  background-color: #fff8ef;
  z-index: 100;

  @media (max-width: 600px) {
    margin-left: 0;
  }

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
    font-size: 0.8rem;
    text-align: center;

    div {
      border-radius: 30px;
      border: 2px solid #437c90;
      width: fit-content;
      padding: 8px 15px;
      margin-top: 5rem;

      &:hover {
        opacity: 0.85;
      }
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
          <Image key={image.name} imgName={image.name} />
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
        {collab !== '' ? (
          <h2>
            Collaboration : <span>{collab}</span>
          </h2>
        ) : null}
        {link !== '' ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div>→ Visit the website</div>
          </a>
        ) : null}
      </RightSection>
    </FlexDiv>
  </PageWrapper>
)

export default Work
