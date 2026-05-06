type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export default function ProductList(product:Product ){
    const whatsappLink = `https://wa.me/549XXXXXXXXX?text=Hola quiero este producto: ${product.name}`;
   return (
    <div className="group">
      <div className="relative overflow-hidden rounded-3xl shadow-sm hover:shadow-lg transition">

        <img
          src={`http://localhost:3000${product.imageUrl}`}
          alt={product.name}
          className="w-full h-95 object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      <div className="mt-4 px-1">
        <h2 className="text-sm font-medium text-neutral-800 tracking-wide">
          {product.name}
        </h2>

        <p className="text-neutral-500 text-sm">
          ${product.price}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          className="text-xs text-[#f4c2c2] hover:underline mt-1 inline-block"
        >
          Consultar
        </a>
      </div>
    </div>
  );

}