import React from 'react'

import { UserForm } from '../components/UserForm'
import Context from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables })
                        .then((response) => {
                          const { signup } = response.data
                          activateAuth(signup)
                        })
                    }

                    const errorMsg = error && 'El usuario ya existe.'

                    return <UserForm onSubmit={onSubmit} title='Registrarse' error={errorMsg} disabled={loading} />
                  }
                }
              </RegisterMutation>
              <LoginMutation>
                {
                  (login, { loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables })
                        .then((response) => {
                          const { login } = response.data
                          activateAuth(login)
                        })
                    }

                    const errorMsg = error && 'Usuario o contraseña incorrectos.'

                    return <UserForm onSubmit={onSubmit} title='Iniciar sesión' error={errorMsg} disabled={loading} />
                  }
                }
              </LoginMutation>
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
