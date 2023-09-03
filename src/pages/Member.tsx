import { motion } from 'framer-motion'

import logo from '../images/logo.png'

export function Member() {
  return (
    <>
      <div className='members'>
        <motion.div className='member' whileHover={{ scale: 1.05 }}>
          <img src={logo} alt='avatar'/>
          <p><strong>나는재영</strong></p>
          <p>Pwn</p>
        </motion.div>
        <motion.div className='member' whileHover={{ scale: 1.05 }}>
          <img src={logo} alt='avatar'/>
          <p><strong>exon</strong></p>
          <p>Web</p>
        </motion.div>
        <motion.div className='member' whileHover={{ scale: 1.05 }}>
          <img src={logo} alt='avatar'/>
          <p><strong>Wane</strong></p>
          <p>Rev</p>
        </motion.div>
        <motion.div className='member' whileHover={{ scale: 1.05 }}>
          <img src={logo} alt='avatar'/>
          <p><strong>s0lwoo</strong></p>
          <p>Crypto</p>
        </motion.div>
        <motion.div className='member' whileHover={{ scale: 1.05 }}>
          <img src={logo} alt='avatar'/>
          <p><strong>BEEP</strong></p>
          <p>Rev</p>
        </motion.div>
      </div>
    </>
  )
}