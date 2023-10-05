import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.svg"
import Data from "./data"

const navbar = () => {
  return (
    <>
      <div className='w-screen h-[10%] py-5 border border-black'>
        <div className='container mx-auto flex justify-between items-center'>
          <div>
            <Image className='inline-block' src={Logo} width={100} height={100} alt='logo' />
            <h1 className='inline-block'>
              Vivek Marketing Cool
            </h1>
          </div>

          <div>
            {Data.map(({ whatsapp, email, phone1, phone2 }, index) => (
              <div key={email}>
                <p>{whatsapp}</p>
                <p>{email}</p>
                <p>{phone1}</p>
                <p>{phone2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar