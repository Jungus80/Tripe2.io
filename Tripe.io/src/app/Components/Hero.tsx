"use client"; // Esto asegura que el código se ejecute en el lado del cliente

import React, { useState, useEffect } from "react";
import Image from "next/image";
import banner1 from "../../public/Assets/banner1.png";
import banner2 from "../../public/Assets/banner2.png";
import banner3 from "../../public/Assets/banner3.png"; // Tu imagen del banner
 // Puedes agregar más imágenes

const Hero = () => {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente diapositiva
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder a la diapositiva anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Cambio automático de diapositivas cada 5 segundos
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className="relative w-full h-60 overflow-hidden mt-20">
      
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-60 relative overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-60 object-cover"
              fill
              style={{objectFit:'cover'}}
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border border-neutral-700 ${
              currentIndex === index ? "bg-black" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};



export default Hero;