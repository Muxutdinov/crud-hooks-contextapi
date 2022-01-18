import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  return (
    <div style={{maxWidth:'30rem',margin:'4rem auto'}}>
      <h1>Nav</h1>
    <Router>
      <Routes>
        <Route  path="/edit/:id" element={<Edit/>}/>
        <Route  path="/add" element={<Add/>}/>
        <Route  path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
