import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

import { ImgWrapper, Img, Button } from './styles'

export const PhotoCard = ({ id, likes = 0, src = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png' }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button><MdFavoriteBorder size='32px' /> {likes} likes!</Button>
    </article>
  )
}
