import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotos } from '../container/ListOfPhotos'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotos categoryId={id} />
    </>
  )
}
