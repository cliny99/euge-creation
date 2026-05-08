export default function Login() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#F9F6F0] to-[#EAE5D9] flex items-center justify-center p-4">
      {/* Logo / Marca */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <div className="w-8 h-8 bg-[#C8A97E] rounded-sm rotate-45" />
        <span className="font-serif text-xl tracking-wide text-[#2C3E2F]">
          Euge Creaciones
        </span>
      </div>

      {/* Card de Login */}
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 border border-[#C8A97E]/30">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C3E2F]/10 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-[#2C3E2F]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 10h18M6 14h2m0 0h2m-2 0v4m2-4h2m0 0h2m-2 0v4m-6-4v4m8-6v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8m14 0h-14"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-serif text-[#2C3E2F]">Admin Panel</h1>
          <p className="text-[#5A6B5D] text-sm mt-1">Ingresa con tus credenciales</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-[#2C3E2F] text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="admin@eugecreaciones.com"
              className="w-full px-4 py-3 rounded-xl border border-[#D4C5B2] bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#C8A97E] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[#2C3E2F] text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-[#D4C5B2] bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#C8A97E] focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2C3E2F] hover:bg-[#1E2A20] text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Iniciar sesión
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#8B7A66] hover:text-[#C8A97E] transition-colors">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Detalle decorativo artesanal */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C8A97E] rounded-full opacity-60" />
      </div>

      {/* Texto pie */}
      <div className="absolute bottom-4 text-center text-xs text-[#8B7A66]">
        Diseño artesanal con esencia única
      </div>
    </div>
  );
}