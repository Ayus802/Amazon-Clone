import React from 'react'

function Login() {
  return (
    <div className=' h-screen w-full flex items-center justify-center'>
        <form className='  flex flex-col border border-gray-400 p-10'>
            <h1 className='text-center text-2xl'>Reiki Healings</h1>
            <label htmlFor="email" className='mt-8 mb-2 text-xl'>Email</label>
            <input type="email" name="email" id="" className='w-80  p-2 rounded-md border-black border'/>
            <label htmlFor="Password" className='mt-8 mb-2 text-xl'>Password</label>
            <input type="password" name="Password" id="" className='w-80 p-2 rounded-md border-black border' />
            <button type="submit" className='w-80 h-12 mt-10 bg-orange-400 rounded-md'>Sign In</button>
            <span className='mt-12 mb-2 text-center'>New to Foundation</span>
            <button className='h-12 w-80 bg-slate-400 rounded-md'>Create an account</button>

        </form>
    </div>
  )
}

export default Login