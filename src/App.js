/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable operator-linebreak */
import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'

import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'
import Context from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegistered = React.lazy(() => import('./pages/NotRegistered'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export default function App () {
  const { isAuth } = useContext(Context.Context)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
