import { useState } from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Page2 from './Components/Page2'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'

function App() {
  return (
    <div className='w-full min-h-screen  bg-zinc-900 text-white'>
    <Navbar/>
    <Landing/>
    <Page2/>
     <About/>
     <Eyes/>
     <Featured/>
     <Cards/>
    </div>
  )
}
export default App
