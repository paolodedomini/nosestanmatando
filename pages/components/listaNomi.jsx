import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useViewportScroll, useTransform, AnimatePresence } from 'framer-motion'
import ItemLista from './itemLista'

function ListaNomi({ data }) {

    const { scrollYProgress, scrollY } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
    //se scrollYProgress è tra 0(min) e 1 (max) allora incrementa da 650 e x

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
        }
    };

    const [openInfo, setOpenInfo] = useState(false)
    const { ref, inView } = useInView()

    return (
        <motion.div
            ref={ref}
            style={{ width: '100%', maxWidth: 900 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <h2>Colombia: <br /> Cimitero Sociale </h2>
            <AnimatePresence>
                {inView && <motion.div className="wrapper-lista"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    {data && data.data?.map((item, index) => {  

                        return (
                            <ItemLista
                                item={item}
                                index={index}
                                openInfo={openInfo}
                                setOpenInfo={setOpenInfo} />
                        )
                    })}
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default ListaNomi