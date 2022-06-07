import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
const animateInfo = {
    hidden: { opacity: 0, top: 0 },
    show: {
        opacity: 0.9, top: -130, transition: {
            type: "spring", stiffness: 50
        }
    },
    exit: { opacity: 0 }
}


function InfoLista({ nome, cognome, data, ruolo, comune, dipartimento }) {

    const [boxInfoRef, setBoxInfoRef] = useState(false)


    const boxInfo = useRef()

    useEffect(() => {
        setBoxInfoRef(boxInfo.current.clientWidth)
    }, [boxInfo])

    console.log(boxInfoRef);

    return (
        <motion.div
            className="wrapper-info"
            variants={animateInfo}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ left: -boxInfoRef / 2 + 35, minWidth: 200 }}

        >
            <div className="simbol"><Image src="/images/croce.svg" width={15} height={35} alt="croce" /></div>
            <div className="dati">
                <div ref={boxInfo} className="nome">{nome} <br /> {cognome}</div>
                <div className="data">{data}</div>
                <div className="comune">{comune}-{dipartimento}</div>

                <div
                    className="dettagli"
                    variants={animateInfo}
                    initial="hidden"
                    show="show"
                >
                    <div className="ruolo">- {ruolo} -</div>
                </div>

            </div>
        </motion.div>
    )
}

export default InfoLista