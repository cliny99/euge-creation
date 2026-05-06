import { useEffect, useState } from "react";
import HeroPage from "../components/hero";
import ProductList from "../components/productList";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-[#fff7f9] text-neutral-900 font-light">

      <HeroPage />

      <section id="products" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-center text-xl tracking-widest text-neutral-600 mb-16">
          COLECCIÓN
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map((p) => (
            <ProductList key={p.id} {...p} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;