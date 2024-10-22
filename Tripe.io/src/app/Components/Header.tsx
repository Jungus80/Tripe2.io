"use client"

import { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/Assets/logo.png"
import { BiSearch, BiShoppingBag, BiUser } from 'react-icons/bi';
import { useCartStore } from '@/public/Data/useCartStore';
import { products } from '@/public/Data/Product';
import { useProductSearchStore } from '@/public/Data/userSearchStorage';

const Header = () => {
  const { totalItems } = useCartStore(); // Obtiene el total de items en el carrito
  const [query, setQuery] = useState<string>(''); // Estado local para el input de búsqueda
  const {searchResults,setSearchResults}  = useProductSearchStore()  
  
  const searchProducts =  (value:string)=>{

    const product = products;

    const matchedProducts = product.filter((item) => {
      return item.categoria.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase()) ||
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.nameAlt.toLowerCase().includes(value.toLowerCase()) ||
        item.descriptionAlt.toLowerCase().includes(value.toLowerCase());
    });

    return matchedProducts; // return the matched products if needed

  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // Actualiza el estado del input de búsqueda
    const result = searchProducts(value); // Realiza la búsqueda con el valor ingresado

    setSearchResults(result);

    
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-sm fixed z-10 w-full top-0 left-0">
      <div className="mx-auto px-4 py-4 flex items-center justify-around">
        <label className="btn btn-circle swap swap-rotate bg-white border-white md:hidden">
          <input type="checkbox" onClick={toggleMobileMenu} />
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={130} height={50} className="w-full h-auto" />
        </Link>

        <nav className={`${isMobileMenuOpen ? "transform translate-x-0 overflow-hidden" : 'transform -translate-x-full md:transition-none'} md:translate-x-0 bg-white flex-col pl-8 md:pl-0 pt-10 md:pt-0 pb-96 md:pb-0 text-lg md:text-base md:flex-row w-full md:w-fit md:top-0 top-20 flex md:relative absolute md:space-x-4 space-y-5 md:space-y-0`}>
          <Link href="/home" className="text-gray-700 hover:text-black hover:underline">Inicio</Link>
          <Link href="/nosotros" className="text-gray-700 hover:text-black hover:underline">Nosotros</Link>
          <Link href="/faq" className="text-gray-700 hover:text-black hover:underline">Centro de ayuda</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="input input-ghost pl-10 pr-4 py-2 w-40"
              value={query} // Valor del input controlado por el estado
              onChange={handleChange} // Manejador de cambios
            />
            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
          </div>
          <button>
            <Link href="/login">
            <BiUser className="h-6 w-6 cursor-pointer hover:scale-110" />
            </Link>
          </button>
          <button>
            <Link href="/shopping" className="flex gap-1 relative group">
              <BiShoppingBag className="h-6 w-6 cursor-pointer group-hover:scale-110" />
              <span className="absolute text-xs bg-slate-400 text-white rounded-xl w-5 h-5 top-3 left-3 group-hover:scale-110">
                {totalItems}
              </span>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
