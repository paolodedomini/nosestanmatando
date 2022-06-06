import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

function FirstText({ speed }) {
    const { scrollYProgress, scrollY } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, 1], [260, 2 * speed])
    //se scrollYProgress è tra 0(min) e 1 (max) allora incrementa da 650 e x


    return (
        <motion.div className="primo-testo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: 260 }}
            transition={{ duration: 1 }}
            style={{ top: yValue }}
        >
            <h2>2016-2022</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos impedit quaerat consequatur vel quidem. Assumenda nam quis magnam,
                laudantium quas qui pariatur odit,
                asperiores doloribus voluptates numquam totam aut veniam?</p>
            <div className="wrapper-box-text">
                <motion.div className="box-text"
                initial={{opacity:0, top: -30}}
                animate={{opacity: 1, top: 0}}
                transition={{delay:0.5, duration:0.5}}
                >
                    <h2>1378</h2>
                    <p>Leader sociali
                        e difensori
                        dei diritti umani</p>
                </motion.div>
                <motion.div className="box-text"
                     initial={{opacity:0, top: -30}}
                     animate={{opacity: 1, top: 0}}
                     transition={{delay:.7, duration:0.5}}
                >
                    <h2>324</h2>
                    <p>Firmatari dell&apos;accordo di pace
                    </p>
                </motion.div>
                <motion.div className="box-text"
                      initial={{opacity:0, top: -30}}
                      animate={{opacity: 1, top: 0}}
                      transition={{delay:.9, duration:0.5}}
                >
                    <h2>327</h2>
                    <p>Stragi
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default FirstText