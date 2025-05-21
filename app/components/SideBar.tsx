import Image from 'next/image'
import React from 'react'
import { IoLogoReact, IoAnalytics, IoFootball } from 'react-icons/io5'
import SidebarMenuItem from './SidebarMenuItem'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoLogoReact size={22} />,
    title: 'Dashboard',
    subTitle: 'Visualize your data',
  },
  {
    path: '/dashboard/counter',
    icon: <IoAnalytics size={22} />,
    title: 'Counter',
    subTitle: 'Contador Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={22} />,
    title: 'Pokemons',
    subTitle: 'Generación Estática',
  },
]

export const SideBar = () => {
  return (
    <aside className="bg-[#1f2937] w-72 min-h-screen text-slate-200 flex flex-col shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-6 text-white text-2xl font-bold">
        <IoLogoReact className="text-sky-400 w-6 h-6" />
        <span>Dash<span className="text-sky-500">8</span>.</span>
      </div>

      {/* Profile */}
      <div className="px-6 py-4 border-t border-b border-gray-700">
        <p className="text-sm text-slate-400 mb-1">Welcome back,</p>
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full object-cover"
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80"
            alt="profile"
            width={36}
            height={36}
          />
          <span className="text-sm font-medium">Edward Tompson</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </nav>
    </aside>
  )
}
