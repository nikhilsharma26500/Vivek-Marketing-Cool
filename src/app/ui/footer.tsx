import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.svg"
import Data from "./data"

const footer = () => {
  return (
    <div className='w-screen border flex items-end bg-[#6c9ae5] text-white'>
      <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Image className='inline-block' src={Logo} width={100} height={100} alt='logo' />

            <div className='inline-block'>
              <h1 className=''>
                Vivek Marketing Cool
              </h1>
          </div>
        </div>
        <div className='dataComponent'>
          <ul>
            {Data.map(({ whatsapp, email, phone1, phone2, address }, index) => (
              <li key={email}>
                <p>{whatsapp}</p>
                <p>{email}</p>
                <p>{phone1}</p>
                <p>{phone2}</p>
                <p>{address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default footer