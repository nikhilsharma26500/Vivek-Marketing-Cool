import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.svg"
import Data from "./data"

const navbar = () => {
  return (
    <>
      <div className='w-screen py-5 border border-black'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Image className='inline-block' src={Logo} width={100} height={100} alt='logo' />

            <div className='inline-block'>
              <h1 className=''>
                Vivek Marketing Cool
              </h1>
              <p>
                {Data[1].GSTIN}
              </p>
            </div>
          </div>

          <div className=''>
            {Data.map(({ whatsapp, email, phone1, phone2 }, index) => (
              <ul key={email}>
                <li>{whatsapp}</li>
                <li>{email}</li>
                <li>{phone1}</li>
                <li>{phone2}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar