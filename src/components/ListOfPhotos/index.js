import React from 'react'

import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotosComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <List>
      {
        photos.map((photo) => {
          return <li key={photo.id}><PhotoCard {...photo} /></li>
        })
      }
    </List>
  )
}
