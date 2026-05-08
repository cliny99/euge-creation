// frontend/src/components/hero.tsx - CON overflow-x-hidden para evitar scroll horizontal
import logo from "../assets/logo.png";

export default function HeroPage() {
  return (
    <section className="relative flex items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-2xl w-full">
        <img
          src={logo}
          alt="Euge Creaciones"
          className="w-24 sm:w-28 md:w-32 mx-auto mb-4 sm:mb-6"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-2 text-[#2C2418]">
          Diseño artesanal
          <span className="block text-[#6B3E1A] text-xl sm:text-2xl md:text-3xl mt-1">
            con esencia única
          </span>
        </h1>

        <p className="text-[#4A3728] text-sm sm:text-base max-w-md mx-auto mb-6 sm:mb-8">
          Piezas delicadas creadas para acompañar tu estilo.
        </p>

        <a
          href="#products"
          className="inline-block bg-[#8B5A2B] text-white px-6 sm:px-8 py-2 rounded-full text-sm shadow-md hover:bg-[#6B3E1A] hover:scale-105 transition-all duration-300"
        >
          Ver colección
        </a>
      </div>
    </section>
  );
}