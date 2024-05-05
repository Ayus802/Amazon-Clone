import React from 'react'

function Hero() {
  return (
    <div className='bg-slate-500 mt-14 h-screen '>
      <div className='flex mt-4 bg-white justify-center '>
        <div className='text-center m-4 cursor-pointer'>
          <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt=""  className='h-28'/>
          <span className='font-semibold'>Grocery</span>
        </div>
        <div className='text-center m-4 cursor-pointer'>
          <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="" className='h-28'/>
          <span className='font-semibold'>Mobiles</span>
        </div>
        <div className='text-center m-4 cursor-pointer'>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR91NiPZCvsl53gu76-8p6busqOMpHviCgeuWE7PJngLFgni0wV" alt="" className='h-28'/>
          <span className='font-semibold'>Fashion</span>
        </div>
        <div className='text-center m-4 cursor-pointer'>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5_mzY1aD8vhK0rqisDX6dl8ae6GR9DwGm45A7igdmqAlYqiVd" alt="" className='h-28'/>
          <span className='font-semibold'>Electronics</span>
        </div>
        <div className='text-center m-4 cursor-pointer flex flex-col justify-center items-center'>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScjtJWdfiQSRrE_5Hmmsr78cji3txlIYKT6_HA2nEsvsFzTKqM" alt="" className='h-28 '/>
          <span className='font-semibold'>Home & Furniture</span>
        </div>
        <div className='text-center m-4 cursor-pointer'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" className='h-28'/>
          <span className='font-semibold'>Appliances</span>
        </div>
      </div>
      <div className='mt-4 overflow-y-auto overflow-scroll  flex'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" alt="" className='w-screen'/>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f39cd50df3682fa7.jpg?q=20" alt="" className='w-screen'/>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/41fb3ad1f14a333f.jpg?q=20" alt="" className='w-screen'/>
      </div>
      <div className='mt-4 p-4 bg-white '>
        <h1 className='text-3xl font-semibold '>Electronics</h1>
        <div className='flex mt-4 max-w-full overflow-y-scroll'>
          <div className=' border border-gray-300 p-4 m-4 min-w-60 flex flex-col justify-center items-center'>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRX1Oey7vsjScMleVb2xaDc52FXeTSRpQ3w2OxqbU8Ealy2LDBUZQAZigUw4jh-8UqhLq6k0r1JYzT4yaiSqg_NA5fBN5Qm2qO1tW2LjQsnb_wQjkW3tNy-CQ&usqp=CAE" alt="" className='w-48 '/>
            <span>Best Headphone</span>
            <span className='font-semibold'>Grab Now</span>
          </div>
          <div className=' border border-gray-300 p-4 m-4  min-w-60 flex flex-col justify-center items-center'>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStYbBxexC-1fpq1SlLhlIaiiLNazu8oQqlyUSSr4c-yhrT3cT08kC_lP6MxU3b7rePkBY6MNywXsPdODgxmfkX3Ngc8MMl2zmdIpQRR6UdRThW5aV0aYam&usqp=CAE" alt="" className='w-48  p-2'/>
            <span>Noise Smartwatches</span>
            <span className='font-semibold'>From Rs. 1,099</span>
          </div>
          <div className=' border border-gray-300 p-4 m-4 min-w-60  flex flex-col justify-center items-center'>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStYbBxexC-1fpq1SlLhlIaiiLNazu8oQqlyUSSr4c-yhrT3cT08kC_lP6MxU3b7rePkBY6MNywXsPdODgxmfkX3Ngc8MMl2zmdIpQRR6UdRThW5aV0aYam&usqp=CAE" alt="" className='w-48  p-2'/>
            <span>Noise Smartwatches</span>
            <span className='font-semibold'>From Rs. 1,099</span>
          </div>
          <div className='border border-gray-300 p-4 m-4 min-w-60  flex flex-col justify-center items-center'>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStYbBxexC-1fpq1SlLhlIaiiLNazu8oQqlyUSSr4c-yhrT3cT08kC_lP6MxU3b7rePkBY6MNywXsPdODgxmfkX3Ngc8MMl2zmdIpQRR6UdRThW5aV0aYam&usqp=CAE" alt="" className='w-48 p-2'/>
            <span>Noise Smartwatches</span>
            <span className='font-semibold'>From Rs. 1,099</span>
          </div>
          <div className='  border border-gray-300 p-4 m-4 min-w-60  flex flex-col justify-center items-center'>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStYbBxexC-1fpq1SlLhlIaiiLNazu8oQqlyUSSr4c-yhrT3cT08kC_lP6MxU3b7rePkBY6MNywXsPdODgxmfkX3Ngc8MMl2zmdIpQRR6UdRThW5aV0aYam&usqp=CAE" alt="" className='w-48 p-2'/>
            <span>Noise Smartwatches</span>
            <span className='font-semibold'>From Rs. 1,099</span>
          </div>
          <div className='  border border-gray-300 p-4 m-4 min-w-60  flex flex-col justify-center items-center'>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStYbBxexC-1fpq1SlLhlIaiiLNazu8oQqlyUSSr4c-yhrT3cT08kC_lP6MxU3b7rePkBY6MNywXsPdODgxmfkX3Ngc8MMl2zmdIpQRR6UdRThW5aV0aYam&usqp=CAE" alt="" className='w-48 p-2'/>
            <span>Noise Smartwatches</span>
            <span className='font-semibold'>From Rs. 1,099</span>
          </div>
          <div className=' border border-gray-300 p-4 m-4  min-w-60 flex flex-col justify-center items-center'>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStYbBxexC-1fpq1SlLhlIaiiLNazu8oQqlyUSSr4c-yhrT3cT08kC_lP6MxU3b7rePkBY6MNywXsPdODgxmfkX3Ngc8MMl2zmdIpQRR6UdRThW5aV0aYam&usqp=CAE" alt="" className='w-48 p-2'/>
            <span>Noise Smartwatches</span>
            <span className='font-semibold'>From Rs. 1,099</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero