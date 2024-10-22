import React from 'react';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { products } from '@/public/Data/Product';
import { empresas } from '@/public/Data/Empresas';

interface ProfileProps {
  index: number; // Aquí debe recibir un número
}

const ProfilePage= ({index}: ProfileProps) => {
  console.log(index)

  console.log(empresas)
  return (
  <div className="my-20 max-w-7xl mx-auto p-8">
      <div className="relative text-white rounded-lg p-8 mb-8 flex items-start bg-cover bg-center" style={{ backgroundImage: `url(${empresas[index]?.image[1]})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
      <div className='relative flex zIndex-10'>
        <Image
          src={empresas[index].image[0]}
          alt={empresas[index].categoria}
          width={100}
          height={100}
          className="w-40 h-40 rounded-full mr-8"
        />
        <div className="flex-grow ">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-white">{empresas[index].name}</h1>
              <p className="text-s mb-4 text-white">
                {empresas[index].description}
              </p>
              <div className="flex space-x-4 mb-6">
                <button>
                <FaFacebook className="w-8 h-8  " />
                </button>
                <button>
                <FaInstagram className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">1</p>
            <p className="text-xl text-white">Ofertas</p>
          </div>
        </div>
      </div>
      </div>
      <div className='text-center'>
        <h1 className='text-red-600 text-4xl font-bold my-10'>Ofertas de {empresas[index].name}</h1>
      </div>
      <div className="container mx-auto px-1 py-2">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-1/2">
            <Image
              src={products[index].image[0]}
              alt={products[index].descriptionAlt}
              width={640}
              height={427}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body lg:w-1/2 justify-center">
            <h2 className="card-title text-3xl">
              <span className="text-warning">{products[index].name}</span>
            </h2>
            <p className="text-base-content/70">
              {products[index].description}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;