import Link from 'next/link'

export default function NotFound() {
  return (

    
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
          <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
            Pokémon no encontrado
          </div>
          <Link
            href="/dashboard/pokemons"
            className="mt-5  inline-block text-sm font-semibold text-white bg-[#FF6A3D] px-6 py-2 rounded-2xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-0 "
          >
            Ir al inicio
          </Link>

        </main>
  )
}