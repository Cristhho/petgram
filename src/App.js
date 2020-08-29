/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotos } from './container/ListOfPhotos'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export default function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotos categoryId={2} />
          </>
      }
    </>
  )
}
