import React from 'react'
import { Helmet } from 'react-helmet'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotos } from '../container/ListOfPhotos'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes compartir fotos de tus animales favoritos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotos categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, newProps) => {
  return prevProps.id === newProps.id
})
