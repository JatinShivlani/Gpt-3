import React from 'react'
import { Navbar,CTA,Brand } from './Components'
import { Blog,Features,Footer,Header,Possibility,WhatGPT3 } from './Containers'
import './app.css'
const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

