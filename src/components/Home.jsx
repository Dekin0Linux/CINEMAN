import React from 'react'

import Aside from './Aside';
import Main from './Main';
import Sidebar from './Sidebar';

function Home() {
  return (
    <div className='md:flex bg-neutral-900 w-full'>
      <Sidebar/>
      <Main />
      <Aside/>
    </div>
  )
}

export default Home