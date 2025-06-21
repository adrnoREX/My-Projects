import React from 'react'

function Size() {
  return (
    <div className=''>
        <p className='font-bold'>Sizes: 
            <label className='border-1 cursor-pointer mx-1 px-3 py-2 mt-2 rounded-full'>XS</label>
            <label className='border-1 cursor-pointer px-4 py-2 mx-1 rounded-full'>S</label>
            <label className='border-1 cursor-pointer px-3 py-2 mx-1 rounded-full'>M</label>
            <label className='border-1 cursor-pointer px-4 py-2 mx-1 rounded-full'>L</label>
            <label className='border-1 cursor-pointer px-3 py-2 mx-1 rounded-full'>XL</label>
            <label className='border-1 cursor-pointer px-2 py-2 mx-1 rounded-full'>XXL</label>
            <label className='border-1 cursor-pointer px-2 py-2 rounded-full'>3XL</label>
        </p>
    </div>
  )
}

export default Size