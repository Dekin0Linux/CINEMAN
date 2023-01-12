
import { useState,useEffect } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home';

// import Aside from './components/Aside';
// import Main from './components/Main';
import Preview from './components/Preview'
// import Sidebar from './components/Sidebar';


// comps
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
