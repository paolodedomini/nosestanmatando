import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
function ItemLista({ item, index, openInfo, setOpenInfo }) {

  const animateItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.12 * index } },

  }


  return (
    <motion.div key={index} className="item-lista"
      variants={animateItem}
      initial="hidden"
      whileInView="show"
      onClick={() => setOpenInfo((prev)=>prev === index ? false : index)}
    >
      <Image
        src="/images/mano.svg"
        alt="lista"
        width={86}
        height={159} />
      {openInfo === index &&
        <div className="wrapper-info">
          <div className="simbol">x</div>
          <div className="dati">
            <div className="nome">{item.nome} {item.cognome}</div>
            <div className="info"></div>
          </div>
        </div>
      }
    </motion.div>

  )
}

export default ItemLista