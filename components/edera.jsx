import React from 'react'
import Image from 'next/image'

function Edera({position}) {
  return (
    <div className={`edera ${position === 'left' ? 'left' : 'right'}`}>
        <Image src="/images/edera.png" width={143} height={1446} alt="back image"/>    
    </div>
  )
}

export default Edera