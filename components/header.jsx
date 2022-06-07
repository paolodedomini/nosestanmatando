import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <header>
        <div className="head-image">
            <Image src="/images/topsite.png" layout='fill'  alt="topsito img" />
        </div>
    </header>
  )
}

export default Header