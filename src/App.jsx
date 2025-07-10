import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Galeria  from './components/Galeria'
import PackingList from './components/PackingList'


function App() {

  return (
    <>
      <section style={{display:"flex", flexDirection:"column", rowGap:20}}>
        <Galeria/>
        <PackingList/>
      </section>

    </>
  )
}

export default App
