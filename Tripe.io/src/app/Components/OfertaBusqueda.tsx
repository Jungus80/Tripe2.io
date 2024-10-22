"use client";
import React from "react";
import OfertaCard from "./OfertaCard";
import { useProductSearchStore } from "@/public/Data/userSearchStorage";
import { products } from "@/public/Data/Product";

const OfertaBusqueda: React.FC = () => {
  const searchResult = useProductSearchStore((state) => state.searchResults);

  return (
    <div className="mb-40">
      <h2 className="text-5xl text-center font-bold my-12">🔥Ofertas Flash🔥</h2>
      <div className="flex justify-center align-middle flex-wrap">
        {searchResult.length != 0
          ? searchResult.map((producto) => (
              <div key={producto.id}>
                <OfertaCard producto={producto} />
              </div>
            ))
          : products.map((producto) => (
              <div key={producto.id}>
                <OfertaCard producto={producto} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default OfertaBusqueda;
