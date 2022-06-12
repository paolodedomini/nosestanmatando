import React from 'react'
import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

function ThirdBird() {
    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, 1], [500, -600 ])
    const opacityValue = useTransform(scrollYProgress, [0.4, 0.6], [0.7, 1 ])

  return (
    <motion.div className='bottom-bird'
    style={{top: yValue, opacity:opacityValue}}
    >
        <Image src="/images/bottombird.png" width={474} height={425} alt="bottom bird" />
    </motion.div>
  )
}

export default ThirdBird