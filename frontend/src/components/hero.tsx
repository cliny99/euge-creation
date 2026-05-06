export default function HeroPage() {
    return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-[#fff7f9] text-center px-6 overflow-hidden">

      {/* glow aesthetic */}
      <div className="absolute w-125 h-125 bg-pink-200 opacity-30 blur-3xl rounded-full -top-25 -left-25" />
      <div className="absolute w-100 h-100 bg-rose-100 opacity-40 blur-3xl rounded-full -bottom-30 -right-20" />

      <div className="relative z-10 max-w-xl">
        <img
          src="/logo.png"
          alt="Euge Creaciones"
          className="w-40 mx-auto mb-10 opacity-90"
        />

        <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-5 text-neutral-800">
          Diseño artesanal <br /> con esencia única
        </h1>

        <p className="text-neutral-500 text-sm md:text-base mb-10">
          Piezas delicadas creadas para acompañar tu estilo.
        </p>

        <a
          href="#products"
          className="inline-block bg-[#f4c2c2] text-white px-7 py-2 rounded-full text-sm shadow-md hover:scale-105 transition"
        >
          Ver colección
        </a>
      </div>
    </section>
  );
}