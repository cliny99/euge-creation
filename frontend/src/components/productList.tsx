// ProductList.tsx - CON imágenes que no desbordan
type ProductListProps = {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
};

const ProductList = ({ product }: ProductListProps) => {
  return (
    <div className="group bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full">
      <div className="relative w-full pt-[100%]">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
          }}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base sm:text-lg font-medium text-[#2C2418]">{product.name}</h3>
        <p className="text-[#8B5A2B] text-lg sm:text-xl font-semibold mt-1">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductList;