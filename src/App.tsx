import './css/App.css'
import './css/stair.css'

import { Nav } from './components/Nav'
import { useEffect, useState } from 'react'

function App() {
  const [isCubeIn, setIsCubeIn] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setIsCubeIn((isCubeIn) => !isCubeIn)
    }, 3000)
  }, [])

  return (
    <div className='App'>
      <main>
        <Nav />
        <div>
          <section>
            <h1 className='big'>The BEST Youth <br></br>Hacking Team</h1>
            <main className="main">
              <section className={(!isCubeIn) ? "scene toggle" : 'scene toggle is-in'}>
                <div className="cubes">
                  <div className="shadows"></div>
                  <div className="cube-wrap cube-wrap--1">
                    <div className="cube">
                      <div className="front side">front</div>
                      <div className="back side">back</div>
                      <div className="top side">top</div>
                      <div className="down side">down</div>
                      <div className="left side">left</div>
                      <div className="right side">right</div>
                    </div>
                  </div>
                  <div className="cube-wrap cube-wrap--2">
                    <div className="cube">
                      <div className="front side">front</div>
                      <div className="back side">back</div>
                      <div className="top side">top</div>
                      <div className="down side">down</div>
                      <div className="left side">left</div>
                      <div className="right side">right</div>
                    </div>
                  </div>
                  <div className="cube-wrap cube-wrap--3">
                    <div className="cube">
                      <div className="front side">front</div>
                      <div className="back side">back</div>
                      <div className="top side">top</div>
                      <div className="down side">down</div>
                      <div className="left side">left</div>
                      <div className="right side">right</div>
                    </div>
                  </div>
                  <div className="cube-wrap cube-wrap--4">
                    <div className="cube">
                      <div className="front side">front</div>
                      <div className="back side">back</div>
                      <div className="top side">top</div>
                      <div className="down side">down</div>
                      <div className="left side">left</div>
                      <div className="right side">right</div>
                    </div>
                  </div>
                  <div className="cube-wrap cube-wrap--5">
                    <div className="cube">
                      <div className="front side">front</div>
                      <div className="back side">back</div>
                      <div className="top side">top</div>
                      <div className="down side">down</div>
                      <div className="left side">left</div>
                      <div className="right side">right</div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </section>
          <p>The best youth hacking team in Korea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        
      </main>
    </div>
  )
}

export default App
