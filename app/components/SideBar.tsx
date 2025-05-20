import Image from 'next/image'
import React from 'react'
import { IoLogoReact, IoAnalytics } from 'react-icons/io5'
import SidebarMenuItem from './SidebarMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoLogoReact size={40} />,
        title: 'Dashboard',
        subTitle: 'Vizualize your data',
    },
    {
        path: '/dashboard/counter',
        icon: <IoAnalytics size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side',
    },
]

export const SideBar = () => {
    return (
        <div id="menu"
            style={{ width: '24rem' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex flex-row items-center gap-2 text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="text-blue-400 w-8 h-8" />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                            alt="profile"
                            width={32}
                            height={32}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Edward Tompson
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">

                {
                    menuItems && menuItems.map((item) => (
                        <SidebarMenuItem
                            key={item.path}
                            {...item}
                        />
                    ))
                }

            </div>
        </div>
    )
}

