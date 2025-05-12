import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Story from './components/Story'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      
      <About/>
      <Gallery/>
      <Story/>
      <Contact/>
   </main>
  )
}

export default App