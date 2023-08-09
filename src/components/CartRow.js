import React from 'react'

const CartRow = () => {
  return (
    <><li className='my-12'><div className='flex ' style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div className='flex ' style={{ alignItems: "center" }}>
              <img className='h-16' src='/images/pic1.webp'></img>
              <span>laptop</span>
          </div>
          <div>
              <button className='bg-yellow-500 rounded-full leading-none py-4 px-2'>-</button>
              <b>10 </b>
              <button className='bg-yellow-500 rounded-full leading-none py-4 px-2'>+</button>
          </div>
          <span>rs 500</span>
          <button className='bg-red-500 rounded-full leading-none py-4 px-2'>ok</button>
      </div></li><li className='my-12'>
              <div className='flex ' style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <div className='flex ' style={{ alignItems: "center" }}>
                      <img className='h-16' src='/images/pic1.webp'></img>
                      <span>laptop</span>
                  </div>
                  <div>
                      <button className='bg-yellow-500 rounded-full leading-none py-4 px-2'>-</button>
                      <b>10 </b>
                      <button className='bg-yellow-500 rounded-full leading-none py-4 px-2'>+</button>
                  </div>
                  <span>rs 500</span>
                  <button className='bg-red-500 rounded-full leading-none py-4 px-2'>kjkjjk</button>
              </div>
          </li></>
  )
}

export default CartRow