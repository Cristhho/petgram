import React from 'react'
import { Helmet } from 'react-helmet'

import { FavsWithQuery } from '../container/GetFavorites'

export const Favs = () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tus favoritos</title>
      </Helmet>
      <h1>Favoritos</h1>
      <FavsWithQuery />
    </>
  )
}
