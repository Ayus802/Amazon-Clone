import React from 'react'

function Navbar() {
  return (
    <header >
        <nav className='bg-blue-950 h-14 flex top-0 w-screen fixed justify-between items-center'>
            <img src="" alt="" />
            <div className='w-1/4 h-2/3 flex'>
                <input type="text" className='w-full rounded-l-full h-full pl-4 text-xl border-none'/>
                <button type="submit" className='bg-slate-600'>Search</button>
            </div>
            <div className='mr-8'>
                Hello boy 
            </div>
        </nav>
    </header>
  )
}

export default Navbar