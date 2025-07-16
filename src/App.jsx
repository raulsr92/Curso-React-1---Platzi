import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Galeria  from './components/Galeria'
import PackingList from './components/PackingList'
import Footer from './components/Footer'
import Especialistas from './components/Especialistas'


function App() {

  return (
    <>
      <section 
        style={{display:"flex", flexDirection:"column", rowGap:20}}>
        <Galeria/>
        <PackingList/>
        <hr></hr>
        <Especialistas/>
        <Footer/>
      </section>

    </>
  )
}

export default App
