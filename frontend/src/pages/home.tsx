// Home.tsx
import { useEffect, useState } from "react";
import HeroPage from "../components/hero";
import ProductList from "../components/productList";
import { api, type Product } from "../service/api";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await api.getProducts();
        
        const productsWithFullUrl = data.map((product) => ({
          ...product,
          imageUrl: api.getImageUrl(product.imageUrl)
        }));
        setProducts(productsWithFullUrl);
      } catch (err) {
        console.error("Error:", err);
        setError("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E0CEDD' }}>
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#8B5A2B] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#4A3728] font-medium">Cargando colección...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E0CEDD' }}>
        <div className="text-center">
          <p className="text-red-600 font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-[#8B5A2B] text-white rounded-full hover:bg-[#6B3E1A] transition shadow-md"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[#2C2418] font-light" style={{ backgroundColor: '#E0CEDD' }}>
      <HeroPage />
      <section className="w-full px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-lg sm:text-xl tracking-[0.2em] text-[#4A3728] mb-8 sm:mb-12 pt-4 font-medium">
            COLECCIÓN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((p) => (
              <ProductList key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;