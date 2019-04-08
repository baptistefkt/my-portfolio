import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

// import Image from '../components/image'

// -------------- CSS --------------- //

const ProjectContainer = styled.div`
  padding: 2rem;
  border-radius: 4px;
  background-color: #fff8ef;

  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }

  /* &:first-of-type {
    grid-column: 1 / span 2;
  } */

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0;
    color: #437c90;
  }

  p {
    color: #437c90;
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 16px;
    /* font-weight: 700; */

    /* span {
      font-size: 12px;
      font-weight: 900;
      color: #437c90;
      margin-left: 10px;
    } */
  }

  .role {
    color: #7eaab7;
    margin-right: 8px;
    font-size: 0.75rem;
    /* padding: 0 8px; */
    /* background-color: #ffca96;
    border-radius: 25px; */
  }
`
const ImgWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin: 1.5rem auto;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3);
  transition: 0.1s ease-in;

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
  background-color: #7eaab7;
  color: #fff8ef;
  font-size: 0.7rem;
  width: fit-content;
  padding: 1px 6px;
  border-radius: 25px;
  font-weight: 700;
`

// -------------- COMPONENT --------------- //

const ProjectCard = ({
  img,
  title,
  slug,
  year,
  type,
  role,
  techno,
  collab,
}) => (
  <ProjectContainer>
    <TitleAndTag>
      <h3>{title}</h3>
      <Tag>
        <span>{techno[0]}</span>
      </Tag>
    </TitleAndTag>
    <p>
      {type[0]}
      {/* <span>{year.substring(0, 4)}</span> */}
    </p>
    {role.map(item => (
      <span className="role" key={item}>{`| ${item}`}</span>
    ))}
    <Link to={`/work/${slug}`}>
      <ImgWrapper>
        <Img fluid={img[0].fluid} alt={img[0].title} />
      </ImgWrapper>
    </Link>
  </ProjectContainer>
)

export default ProjectCard
