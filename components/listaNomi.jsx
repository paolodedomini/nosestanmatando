import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useViewportScroll, useTransform, AnimatePresence } from 'framer-motion'
import ItemLista from './itemLista'

function ListaNomi({ data }) {

    const [visibilitaLista, setVisibilitalista] = useState(false)


    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };


    useEffect(() => {
        if (inView) { setVisibilitalista(true) }
    })

    const [openInfo, setOpenInfo] = useState(false)
    const { ref, inView } = useInView()

    return (
        <motion.div
            ref={ref}
            style={{ width: '100%', maxWidth: 980 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {visibilitaLista &&
                <motion.div
                    initial={{ opacity: 0, top: -100 }}
                    animate={{ opacity: 1, top: 0 }}
                    transition={{ duration: 0.5 }}
                    className="intestazione">
                    <div className='anno'>2022</div>  <h2>Colombia: <br /> Cimitero Sociale </h2>
                </motion.div>}
            <AnimatePresence>
                {visibilitaLista && <motion.div className="wrapper-lista"
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