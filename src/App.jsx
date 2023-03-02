import { products as initialProducts } from './mocks/products.json';
import { Products } from './components/Products';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  //methods
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters, filters };
}

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;