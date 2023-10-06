import React from 'react'
import Link from 'next/link'

const tabs = [
  { name: 'Deep Freezer', href: '/DFridge' },
  { name: 'Four Door Fridge', href: '/Fourdoor' },
  { name: 'Fridge', href: '/Fridge' },
  { name: 'Two-Door', href: '/Two-Door' },
  { name: 'Under Counter', href: '/Under-Counter' },
  { name: 'Visicooler', href: '/Visicooler' },
  { name: 'Watercooler', href: '/Watercooler' },
];

const Tabs = () => {
  return (
    <div className='border border-black w-screen'>
      <div className='flex justify-between'>
        {tabs.map((tab, index) => (
          <button key={index}>
            <Link href={tab.href}>
              <p>{tab.name}</p>
            </Link>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
