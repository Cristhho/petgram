import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotos } from './components/ListOfPhotos'
import { Logo } from './components/Logo'
import { GlobalStyle } from './GlobalStyles'

export default function App () {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotos />
    </>
  )
}
