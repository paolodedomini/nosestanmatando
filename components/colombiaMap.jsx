import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/mediaQuery'

function ColombiaMap() {

    const isMobile = useMediaQuery('(max-width: 1300px)')
console.log(isMobile);
    return (
        <motion.div className="wrap-colombia-map"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} 
        >
            <Image
                src="/images/colombia.svg"
                alt="colombia"
                layout="responsive"
                width={1200}
                height={1500}
            />
            <h1>#NosEstan <br /> Matando</h1>
        </motion.div>
    )
}

export default ColombiaMap