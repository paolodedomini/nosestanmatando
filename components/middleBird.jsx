import React from 'react'
import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from 'framer-motion'




function MiddleBird() {
    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, 1], [1650, 0 ])
    const opacityValue = useTransform(scrollYProgress, [0.4, 0.6], [0.3,1 ])

  return (
    <motion.div 
    className='second-bird'

    style={{top: yValue, opacity: opacityValue}}
    >
    <Image src="/images/middlebird.png" alt="middlebird" width={538} height={205} />
    </motion.div>
  )
}

export default MiddleBird