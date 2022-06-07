import React from 'react'
import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from 'framer-motion'


function FirstBird() {

    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, 1], [750, -300 ])
    const opacityValue = useTransform(scrollYProgress, [0, 0.1], [0.4, 1 ])

  return (
    <motion.div 
    className='first-bird'

    style={{top: yValue, opacity:opacityValue}}
    >
        <Image src="/images/topbird.png" alt="topbird" height={278} width={417} />
    </motion.div>
  )
}

export default FirstBird