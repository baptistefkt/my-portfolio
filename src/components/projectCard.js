import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'

import Image from '../components/image'

// -------------- CSS --------------- //

const ProjectContainer = styled.div`
  padding: 2rem;
  border-radius: 4px;
  background-color: #fff8ef;
  position: relative;
  z-index: 100;

  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }

  /* &:first-of-type {
    grid-column: 1 / span 2;
  } */

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0;
    color: #222;
  }

  p {
    color: #888;
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`
const ImgWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin: 1.5rem auto;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in;

  &:hover {
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    transform: translateY(-2px) scale(1.01);
  }
`
const TitleAndTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Tag = styled.div`
  background-color: #eee;
  color: #999;
  font-size: 0.7rem;
  width: fit-content;
  padding: 2px 5px;
  border-radius: 4px;
  font-weight: 700;
`

// -------------- COMPONENT --------------- //

const ProjectCard = ({ imgLabel, title, slug, description, tag }) => (
  <ProjectContainer>
    <TitleAndTag>
      <h3>{title}</h3>
      <Tag>
        <span>{tag}</span>
      </Tag>
    </TitleAndTag>
    <p>{description}</p>
    <Link to={`/work/${slug}`}>
      <ImgWrapper>
        <Image imgName={imgLabel} />
      </ImgWrapper>
    </Link>
  </ProjectContainer>
)

export default ProjectCard
