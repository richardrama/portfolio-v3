import React from 'react'
import { Hero, Navbar, Socials } from './components'

const App = () => {
  return (
    <div className='bg-background px-[50px] md:px-[100px] lg:px-[150px] flex flex-col items-center'>
      <Navbar />
      <Hero />
      <Socials />
    </div>
  )
}

export default App