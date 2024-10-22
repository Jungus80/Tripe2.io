import { useCartStore } from '@/public/Data/useCartStore';
import React from 'react'
import CartItem from './CartItem';
import Link from 'next/link';

const Cart = () => {

    const {cart, totalPrice} = useCartStore();

  

  return (
    <section className='mt-32 md:m-20 m-10'>
            <div className='flex justify-between items-center'>
                <h2 className='text-4xl font-semibold my-10'>Carrito de compras</h2>
                <h2><Link href="/" className='font-semibold text-xl hover:underline'>Seguir comprando</Link></h2>
            </div>
        <ul>
        {cart.map(product => (
        <CartItem key={product.id} product={product} />
        ))}
        </ul>
    <div className='flex justify-between items-center mt-6 border rounded-xl shadow-md p-4 mb-10'>
     <span className='text-2xl font-semibold'>Total: {totalPrice}$</span>
     <button className="w-1/4 h-10 bg-black text-white border shadow-md rounded-full font-semibold text-lg hover:bg-red-600 duration-300">Comprar</button>

    </div>
   </section>
  )
}

export default Cart