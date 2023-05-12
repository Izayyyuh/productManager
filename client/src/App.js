import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

function App () {
    
  return(
<div>
    <BrowserRouter>
          <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Detail/>} path="/:id" />
            <Route element={<Update/>} path="/products/edit/:id" />
          </Routes>
    </BrowserRouter>
      </div>
  ) 
}
export default App;


