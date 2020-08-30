import React, { useState, useEffect } from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    window.fetch('https://petgram-api-black.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  return { categories }
}

export const ListOfCategories = () => {
  const { categories } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List showOrHide={showFixed} className={fixed ? 'fixed' : ''}>
      {
        categories.map((category) =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {renderList(true)}
    </>
  )
}
