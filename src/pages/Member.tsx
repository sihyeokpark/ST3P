import { motion } from 'framer-motion'
import React from 'react'

import logo from '../images/logo.png'

export function Member() {
  const members = [
    ['나는재영', 'Pwn', logo],
    ['exon', 'Web', logo],
    ['Wane', 'Rev', logo],
    ['s0lwoo', 'Crypto', logo],
    ['BEEP', 'Rev', logo],
    ['is07king', 'Web, Pwn', logo],
  ]

  return (
    <>
      <div className='members'>
        {
          members.map((member, _) => {
            return (
              <motion.div key={member as any} className='member' whileHover={{ scale: 1.05 }}>
                <img src={member[2]} alt='avatar'/>
                <p><strong>{member[0]}</strong></p>
                <p>{member[1]}</p>
              </motion.div>
            )
          })
        }
      </div>
    </>
  )
}