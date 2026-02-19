import type { FormEvent } from "react";

export const Login_form = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí irá tu lógica de autenticación
    console.log("Intentando iniciar sesión...");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center rounded-xl text-[#F9E6C5] shadow-2xl bg-linear-to-r from-[#766A5D] to-[#4E4942]
             w-80 h-110 p-6 
             lg:w-140 lg:h-160 lg:p-12"
    >
      <h2 className="font-bold text-center mb-1 text-xl lg:text-4xl lg:mb-2">
        Inicio de sesión
      </h2>
      <p className="text-center italic opacity-80 mb-6 text-xs lg:text-lg lg:mb-10">
        Acceso exclusivo para personal autorizado
      </p>

      <div className="flex flex-col gap-4 lg:gap-8">
        <label className="flex flex-col gap-1 lg:gap-3">
          <span className="font-medium text-sm lg:text-xl">Usuario</span>
          <input
            type="text"
            className="rounded bg-[#F9E6C5]/10 border border-[#F9E6C5]/30 focus:outline-none focus:ring-2 focus:ring-[#F9E6C5] text-white
                   p-2 lg:p-4 lg:text-lg"
            placeholder="Introduce tu usuario"
            required
          />
        </label>

        <label className="flex flex-col gap-1 lg:gap-3">
          <span className="font-medium text-sm lg:text-xl">Contraseña</span>
          <input
            type="password"
            className="rounded bg-[#F9E6C5]/10 border border-[#F9E6C5]/30 focus:outline-none focus:ring-2 focus:ring-[#F9E6C5] text-white
                   p-2 lg:p-4 lg:text-lg"
            placeholder="••••••••"
            required
          />
        </label>

        <button
          type="submit"
          className="mt-4 font-bold rounded-lg transition-colors cursor-pointer shadow shadow-amber-100/50 bg-[#F37A21] text-white hover:bg-white hover:text-[#F37A21]
                 py-2 lg:py-4 lg:mt-8 lg:text-2xl"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};
