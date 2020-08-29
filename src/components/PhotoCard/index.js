import React from 'react'

import { Article, ImgWrapper, Img } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

export const PhotoCard = ({ id, likes = 0, src = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png' }) => {
  const itemKey = `like${id}`

  const [show, ref] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(itemKey, false)

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                    setLiked(!liked)
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}
