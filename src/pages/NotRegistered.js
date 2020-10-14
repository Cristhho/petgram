import React from 'react'
import { UserForm } from '../components/UserForm'

import Context from '../Context'

export const NotRegistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <UserForm onSubmit={activateAuth} title='Registrarse' />
              <UserForm onSubmit={activateAuth} title='Iniciar sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
