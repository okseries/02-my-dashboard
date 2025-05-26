import { Metadata } from 'next';
import { WidgetsGrid } from '@/src/components';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Dashboard de la aplicación',
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className='mt-2 text-3xl'> Dashboard</h1>
      <span className='txt-xl'>Información genérica</span>

      <WidgetsGrid/>
    </div>
  )
}



