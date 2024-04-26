import React from 'react'

function Navbar() {
  return (
    <header >
        <nav className='bg-slate-200 border-b border-2 border-b-gray-500 h-14 flex top-0 w-screen fixed justify-between items-center'>
            <img src="" alt="" />
            <div className='w-1/4 h-2/3 flex'>
                <input type="text" className='w-full rounded-l-md h-full pl-4 text-sm border-black border'/>
                <button type="submit" className='bg-slate-600 h-full rounded-r-md p-2'>Search</button>
            </div>
            <div className='mr-8'>
                Hello boy 
            </div>
        </nav>
    </header>
  )
}

export default Navbar