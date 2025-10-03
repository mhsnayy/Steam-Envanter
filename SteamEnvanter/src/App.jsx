import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import Container from './components/container'
import ExampleFrom from "./components/ExampleForm"
import ListInventory from './components/ListInventory';
import Axioss from "./axios/axioss"

function App() {

  return (
    <>
      <Container>
        <Router>
          <Routes>
            <Route path='/' element={<ExampleFrom/>}/>
            <Route path='/inventory' element={<ListInventory/>}/>
            <Route path="/axios" element={<Axioss/>}/>
          </Routes>
        </Router>
      </Container>
      
    </>
  )
}

export default App
