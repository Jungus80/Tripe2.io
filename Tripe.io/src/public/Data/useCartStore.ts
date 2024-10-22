import {create} from "zustand"
import { product } from "./Product"
import {persist} from "zustand/middleware"


interface State {
    cart: product[]
    totalItems: number
    totalPrice: number
}
interface Actions {
    addToCart: (Item: product, value:number) => void
    removeFromCart: (Item: product) => void
   }

   const INITIAL_STATE: State = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
 
   }

   export const useCartStore = create(persist<State & Actions>((set, get) => ({
    cart: INITIAL_STATE.cart,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
   

    addToCart: (product: product, value:number) => {
     const cart = get().cart
     const cartItem = cart.find(item => item.id === product.id)
   
     // If the item already exists in the Cart, increase its quantity
     if (cartItem) {
      const updatedCart = cart.map(item =>
       item.id === product.id ? { ...item, quantity: (item.quantity as number) + value } : item
      )
      set(state => ({
       cart: updatedCart,
       totalItems: state.totalItems + value,
       totalPrice: state.totalPrice + product.price * value,
      }))
     } else {
      const updatedCart = [...cart, { ...product, quantity: value }]
   
      set(state => ({
       cart: updatedCart,
       totalItems: state.totalItems + value,
       totalPrice: state.totalPrice + product.price * value,
      }))
     }
    },
    removeFromCart: (product: product) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
            const updatedCart = cart.filter((item) => item.id !== product.id);
     set(state => ({
      cart: updatedCart,
      totalItems: state.totalItems - (cartItem.quantity as number),
      totalPrice: state.totalPrice - product.price * (cartItem.quantity as number),
     }))}
    },
   }),
   {
    name: "cart-storage", // unic name
   }
))