import { Stair } from "../components/Stair"
import { motion, useMotionValue } from 'framer-motion'

export function Home() {
  const x = useMotionValue(0)
  
  return (
    <>
      <motion.div>
        <section className='maintitle'>
          <motion.h1 className='big' whileHover={{ scale: 1.05 }}>The BEST Youth <br></br><span className='gradient line'>Hacking</span> Team</motion.h1>
          <Stair/>
        </section>
        <p>The best youth hacking team in Korea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </motion.div>
    </>
  )
}