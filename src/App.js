/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable operator-linebreak */
import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegistered } from './pages/NotRegistered'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

export default function App () {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth ? <Router>
              <Favs path='/fav' />
              <User path='/user' />
            </Router>
              : <Router>
                <NotRegistered path='/fav' />
                <NotRegistered path='/user' />
              </Router>
        }
      </UserLogged>
      <Navbar />
    </>
  )
}
