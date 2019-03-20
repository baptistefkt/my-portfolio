import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Work from '../../components/work'

const images = [
  {
    name: 'cuustomer-home.png',
  },
  {
    name: 'cuustomer-article.png',
  },
  {
    name: 'cuustomer-categories.png',
  },
  {
    name: 'cuustomer-category.png',
  },
  {
    name: 'cuustomer-provider.png',
  },
]

const summary =
  'When I started my internship at Cuustomer the website had just been launched. So there was still plenty to be done. From responsive design improvement to development of new features, SEO optimisation, implementation of Contentful as a content manager and NextJS for server sider rendering. Those three months were intense and allowed me to learn a lot of  different things'

const Cuustomer = () => (
  <Layout>
    <SEO title="Cuustomer" />
    <Work
      title="Cuustomer.com"
      summary={summary}
      year="2018-2019"
      type="Web App"
      role="Front-end development, SEO optimisation"
      techno="ReactJS, NextJS, Contentful, Apollo-graphQL"
      collab="Aron Dadi, Quentin Claes, Nicolay Yadrychnikov, Geoffrey Poelmans, Massimo Regaglia"
      images={images}
      link="https://www.cuustomer.com/"
    />
  </Layout>
)

export default Cuustomer
