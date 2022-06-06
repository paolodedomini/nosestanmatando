import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


function ColombiaMap() {

    return (
        <motion.div className="wrap-colombia-map"
            initial={{ opacity: 0, top: -500  }}
            animate={{ opacity: 1, }}
            transition={{ duration: 1 }} 
        >
            <Image
                src="/images/colombia.svg"
                alt="colombia"
                layout="fixed"
                width={1200}
                height={1500}
            />
            <h1>#NosEstan <br /> Matando</h1>
        </motion.div>
    )
}

export default ColombiaMap