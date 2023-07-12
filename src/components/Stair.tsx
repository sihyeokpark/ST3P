import { useEffect, useState } from 'react'

export function Stair() {
  const [isCubeIn, setIsCubeIn] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setIsCubeIn((isCubeIn) => !isCubeIn)
    }, 3000)
  }, [])

  return (
    <main className="main">
      <div className={(!isCubeIn) ? "scene toggle" : 'scene toggle is-in'}>
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
      </div>
    </main>
  )
}