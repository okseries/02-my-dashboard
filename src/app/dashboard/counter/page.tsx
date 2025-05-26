import { CartCounter } from '@/src/shopping-cart'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart',
}



const CounterPage = () => {
  

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>productos en el carrito</span>

      <CartCounter value={20}/>
    
    </div>
  )
}

export default CounterPage
