import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Work from '../../components/work'

const images = [
  {
    name: 'portfolio-home.png',
  },
  {
    name: 'portfolio-about.png',
  },
  {
    name: 'portfolio-gyuto.png',
  },
  {
    name: 'portfolio-work.png',
  },
]

const summary =
  "Here is my personal website. I've built it using Gastby and styled-components. I've designed it from scratch and without any CSS framework. "

const Gyuto = () => (
  <Layout>
    <SEO title="My porfolio" />
    <Work
      title="My Portfolio"
      summary={summary}
      year="2019"
      type="Personal website"
      role="Front-end development and Design"
      techno="Gatsby, Styled-components"
      collab=""
      images={images}
      link="https://github.com/baptistefkt/my-portfolio"
    />
  </Layout>
)

export default Gyuto
