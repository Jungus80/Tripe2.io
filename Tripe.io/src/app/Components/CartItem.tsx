import { useCartStore } from "@/public/Data/useCartStore"
import Image from "next/image"
import { BiX } from "react-icons/bi"

export default function CartItem({ product }: any) {

// Recover the store action to remove items from the cart
 const removeFromCart = useCartStore(state => state.removeFromCart)
  
 return (
  <div className='flex justify-between items-star gap-4  mb-2 shadow-md p-4 border rounded-xl w-full'>
    
        <div className="flex justify-center items-start">
            <Image src={product.image[0]} alt={product.alt} width={200} height={100} className="rounded-xl  " ></Image>
            <div className="flex flex-col text-lg font-semibold mx-5">
              <h3 className="">{product.name}</h3>
              <p>Precio: {product.price}$</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
        </div>
   <div className="flex items-start justify-start">
    <button
     title='Remove Item'
     className='text-red-500 hover:text-red-600 ml-4'
     onClick={() => removeFromCart(product)}
    >
     <BiX className="w-7 h-7 rounded-full bg-white shadow-md border hover:scale-105 hover:bg-red-600 duration-300"></BiX>
    </button>
   </div>
  </div>
 )
}