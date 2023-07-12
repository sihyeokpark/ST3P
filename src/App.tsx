import './css/App.css'
import './css/stair.css'

import { ReactNode, useEffect, useState } from 'react'

import { Nav } from './components/Nav'

function App({children}: any) {
  return (
    <div className='App'>
      <main>
        <Nav />
        {children}
      </main>
    </div>
  )
}

export default App
