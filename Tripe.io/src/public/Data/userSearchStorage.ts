import { create } from 'zustand';  // Import `create` directly
import { product } from './Product';

interface ProductSearchStore {
  searchResults: product[];  // Declares that `searchResults` is an array of `product` objects
  setSearchResults: (products: product[]) => void;  // Function to update the array
}

export const useProductSearchStore = create<ProductSearchStore>((set) => ({
  searchResults: [],
  setSearchResults: (products) => set({ searchResults: products }),
}));
