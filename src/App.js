
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Preview from './components/Preview'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/preview/:movID" element={<Preview/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Preview/> */}
    </div>
  );
}

export default App;
