import React from 'react'
import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from 'framer-motion'




function Lastbird() {
    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, 1], [0, -300 ])
    const opacityValue = useTransform(scrollYProgress, [0.4, 0.6], [0.3,1 ])

  return (
    <motion.div 
    className='last-bird'
    style={{top: yValue, opacity: opacityValue}}>
    <Image src="/images/lastbird.png" alt="middlebird" width={290} height={358} />
    </motion.div>
  )
}

export default Lastbird