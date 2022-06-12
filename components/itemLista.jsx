import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import InfoLista from './infoLista'
function ItemLista({ item, index, openInfo, setOpenInfo }) {

  const animateItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.12 * index } },

  }

  const [dettagliOpen, setDettagliOpen] = useState(false)

  return (
    <motion.div
      key={index}
      className={`item-lista ${((openInfo !== index) && (openInfo !== false)) ? 'off' : 'on'} ${(openInfo === false) ? 'default' : ''}`}
      variants={animateItem}
      initial="hidden"
      animate="show"
      onMouseEnter={() => setOpenInfo((prev) => prev === index ? false : index)}
      onMouseLeave={() => { setOpenInfo(false); setDettagliOpen(false) }}
    >
      <Image
        src="/images/mano.svg"
        alt="lista"
        width={86}
        height={159} 
        style={{opacity:0.8}}/>
      <AnimatePresence>
        {openInfo === index &&
          <InfoLista
            nome={item.nome}
            cognome={item.cognome}
            data={item.data}
            ruolo={item.ruolo}
            comune={item.comune}
            dipartimento={item.dipartimento}
            dettagliOpen={dettagliOpen}
          />
        }</AnimatePresence>

    </motion.div>

  )
}


export default ItemLista