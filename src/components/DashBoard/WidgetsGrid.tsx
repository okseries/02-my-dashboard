"use client"
import { useAppSelector } from "@/src/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
    const count = useAppSelector((state) => state.counter.count);
    return (
        <div className='flex flex-wrap p-2 gap-4 items-center justify-center'>
            <SimpleWidget
                label="Contador"
                title={`${count}`}
                subTitle={count > 1 ? "Productos agregados" : "No hay productos agregados"}
                icon={
                    <IoCartOutline size={40} className="text-blue-600" />
                }
                href="/dashboard/counter"
            />
        </div>
    )
}


