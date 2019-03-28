import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Work from '../../components/work'

const images = [
  {
    name: 'gyuto-home.png',
  },
  {
    name: 'gyuto-music.png',
  },
  {
    name: 'gyuto-image.png',
  },
  {
    name: 'gyuto-images.png',
  },
  {
    name: 'gyuto-doclist.png',
  },
]

const summary =
  '"Gyütö" is the name of a Tibetan Buddhist monastery about which Filipa Cardoso directed and produced a documentary made of a series of short videos. Filipa wanted a custom website that would be the perfect medium for her documentary and that would immerse the spectator into this journey to Gyütö'

const Gyuto = () => (
  <Layout>
    <SEO title="Gyütö" />
    <Work
      title="Gyütö"
      summary={summary}
      year="2018"
      type="Custom website"
      role="Front-end development"
      techno="ReactJS, SASS"
      collab="Pedro Seromenho, Liliane Mamane, Geoffrey Poelmans"
      images={images}
      link="http://gyuto-movie.com/"
    />
  </Layout>
)

export default Gyuto
