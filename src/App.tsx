import './css/App.css'
import './css/stair.css'

import { Nav } from './components/Nav'

function App({children}: any) {
  return (
      <main>
        <Nav />
        {children}
      </main>
  )
}

export default App
