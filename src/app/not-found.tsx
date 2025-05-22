import Link from 'next/link'
import { SideBar } from '../components'

export default function NotFound() {
  return (

    <div className="w-screen h-screen flex overflow-hidden bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white">
      <SideBar />
      <div className="flex-1 h-full overflow-y-auto text-slate-900">
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
          <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
          </div>
          <Link
            href="/dashboard/pokemons"
            className="mt-5  inline-block text-sm font-semibold text-white bg-[#FF6A3D] px-6 py-2 rounded-2xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-0 "
          >
            Ir al inicio
          </Link>

        </main>
      </div>
    </div>

  )
}