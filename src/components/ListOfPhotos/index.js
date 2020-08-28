import React from 'react'

import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotos = () => {
  return (
    <List>
      {
        [1, 2, 3, 4].map((photo) => {
          return <li key={photo}><PhotoCard id={photo} /></li>
        })
      }
    </List>
  )
}
