import React from 'react'
import Banner from '../banner/Banner'
import Books from '../BookCard/Books'

const Home = () => {
  return (
    <div className='p-4 lg:p-0'>
    <Banner></Banner>
    <Books></Books>
    </div>
  )
}

export default Home
