import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Blog from './container/Blog'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Blog />
    </MainLayout>
  )
}

export default HomePage