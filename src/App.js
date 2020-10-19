/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable operator-linebreak */
import React, { useContext } from 'react'
import { Redirect, Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegistered } from './pages/NotRegistered'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'
import Context from './Context'
import { NotFound } from './pages/NotFound'

export default function App () {
  const { isAuth } = useContext(Context.Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <div id='wrapper'>
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegistered path='/login' />}
          {!isAuth && <Redirect noThrow from='/fav' to='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {isAuth && <Redirect noThrow from='/login' to='/' />}
          <Favs path='/fav' />
          <User path='/user' />
        </Router>
      </div>
      <Navbar />
    </>
  )
}
