import React from 'react'

import { UserForm } from '../components/UserForm'
import Context from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables })
                        .then(activateAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe.'

                    return <UserForm onSubmit={onSubmit} title='Registrarse' error={errorMsg} disabled={loading} />
                  }
                }
              </RegisterMutation>
              <UserForm onSubmit={activateAuth} title='Iniciar sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
