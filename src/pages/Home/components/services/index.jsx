import React from 'react'
import Web from '../assets/web.png'
import Design from '../assets/design.png'
import Photographer from '../assets/photographer.png'

function Services() {
  return (
    <div id='services' className='lg:w-full lg:h-screen bg-[#ede9fe] w-96'>
<div className='flex lg:flex-row flex-col p-28'>
<div className='w-96 h-96 shadow-xl rounded-2xl lg:ml-6 ml-14 mt-10 bg-white p-2 '>
<img src={Web} alt="web" />
<div>
  <h1 className='text-3xl font-bold text-center text-[#3f3f46]'>Developer Fullstack</h1>
<p className='text-xl font-bold p-6 text-[#52525b] text-center'>Web developer, app developer, desktop developer, 3D developer</p>
</div>
</div>

<div className='w-96 h-96 shadow-xl rounded-2xl ml-14 mt-10 bg-white p-2 '>
<img src={Design} alt="design" className='w-80 h-1/2' />
<div className='mt-8'>
<h1 className='text-3xl font-bold text-center text-[#3f3f46]'>UX/UI designer</h1>
<p className='text-xl font-bold p-6 text-[#52525b] text-center'>Web designer, app designer, desktop designer</p>
</div>
</div>

<div className='w-96 h-96 shadow-xl rounded-2xl ml-14 mt-10 bg-white p-2'>
<img src={Photographer} alt="photographe" className='w-80 h-1/2 ml-2' />
<div className='mt-8'>
<h1 className='text-3xl font-bold text-center text-[#3f3f46]'>Video/Photographer</h1>
<p className='text-xl font-bold p-6 text-[#52525b] text-center'>youtuber, Photo session</p>
</div>
</div>
</div>
    </div>
  )
}

export default Services