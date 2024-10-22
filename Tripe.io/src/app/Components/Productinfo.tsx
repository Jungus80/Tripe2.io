'use client'

import Link from "next/link"
import Image from 'next/image';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import React, { ChangeEvent, useState } from 'react';
import { products } from '@/public/Data/Product';
import { empresas } from '@/public/Data/Empresas';
import { useCartStore } from "@/public/Data/useCartStore";
import GoogleMaps from "./GoogleMaps";



interface ProductProps {
  index: number; // Aquí debe recibir un número
}

export default function ProductInfo({index}: ProductProps)

{
  const [images, setImages] = useState([
    products[index].image[1],
    products[index].image[2],
    products[index].image[3],
  ]);

  // Estado para la imagen principal
  const [mainImg, setMainImg] = useState(products[index].image[0]);

  // Intercambiar la imagen principal con la miniatura seleccionada
  const handleImgSwap = (index: number) => {
    const newImages = [...images]; // Clonar el array de imágenes
    const temp = mainImg; // Guardar la imagen principal temporalmente
    setMainImg(newImages[index]); // La miniatura seleccionada pasa a ser la imagen principal
    newImages[index] = temp; // La imagen principal anterior pasa a ser la miniatura
    setImages(newImages); // Actualizar el arreglo de miniaturas
  };

  const [inputValue, setInputValue] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      setInputValue(newValue);
    }
  };

  const increase = (): void => {
    setInputValue(prevValue => prevValue + 1);
  };

  const decrease = (): void => {
    if (inputValue > 1) { // Aseguramos que el valor no sea menor a 1
      setInputValue(prevValue => prevValue - 1);
    }
  };

  const {addToCart, cart} = useCartStore()
  console.log(cart)
  return (
    <div className="container mx-auto px-4 py-8 my-20 bg-white">
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-1/2">
          <div className="main-image">
            <Image className="rounded-md drop-shadow-xl" src={mainImg} alt="Imagen Principal" width={600} height={400} />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((img, index) => (
            <button key={index} onClick={() => handleImgSwap(index)}>
              <Image src={img} alt={`Thumbnail ${index}`} width={100} height={100} className="w-full h-auto rounded-md" />
            </button>
            ))}
          </div>  
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-black">{products[index].name}</h1>
          <Link href={`/empresa/${index}`}>  {/**id de elemento */}
            <p className="mb-2 hover:text-red-600 hover:font-bold">
                    {empresas[index].name}
                </p>
            </Link>
          <div className="mb-4">
            <span className="text-3xl font-bold text-red-600">$ {products[index].price}</span>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                <p>{products[index].star}</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            {products[index].description}
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg bg-gray-200">
              <button className='  p-2 px-2  text-gray-400 bg-transparent rounded-lg text-sm'
                onClick={decrease}>
                <FiMinus className="h-4 w-4 text-black  " />
              </button>
              
              <input
                type="number"
                min="1"
                max="99"
                className="input w-16 border-0 bg-transparent outline-none focus:outline-none text-center text-black"
                value={inputValue}
                onChange={handleChange}
              />
              <button className=' flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium '
                 onClick={increase}>
                <FiPlus className="h-4 w-4 text-black"/> 
              </button>
            </div>
            <button className="btn flex-1 bg-[#FF0E0E] outline-none border-none rounded-lg" onClick={()=> addToCart(products[index], inputValue)}>
              <MdOutlineShoppingCart className="mr-2 h-4 w-4 text-white" /> 
              <span className='text-white'>
              Agregar a carrito
              </span>
            </button>
          </div>
          
        </div>
      </div>

      <section className='flex justify-start items-center'>
        <div className='text-center text-black'>
          <div className="mb-4 text-4xl font-bold">
            Ubicación de Producto
          </div>
          <hr className="mb-4"/>
          <GoogleMaps lat = {products[index].lat} lng = {products[index].lng}/>
        </div>
      </section>
    </div>
  );
}