import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './finbuzz/Home';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/page' element={<h1>Page Component</h1>}></Route>
          <Route path='/service' element={<h1>Services Component</h1>}></Route>
          <Route path='/shop' element={<h1>Shop Component</h1>}></Route>
          <Route path='/blog' element={<h1>Blog Component</h1>}></Route>
          <Route path='/element' element={<h1>Elements Component</h1>}></Route>  */}
        </Routes>
      </Router>
    </>
  )
}