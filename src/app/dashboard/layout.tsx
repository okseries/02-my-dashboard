import { SideBar } from '@/src/components'
import React from 'react'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="w-screen h-screen flex overflow-hidden bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white">
            <SideBar />
            <div className="flex-1 h-full overflow-y-auto text-slate-900">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
