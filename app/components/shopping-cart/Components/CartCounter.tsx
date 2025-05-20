"use client"
import React, { useState } from 'react'

interface Props {
    value?: number
}

export const CartCounter = ({value = 0}: Props) => {
    const [counter, setCounter] = useState(value);

    const handleIncrement = (number: number) => {
        setCounter(counter + number)
    }

    return (
        <div className='flex flex-col items-center justify-center '>
            <span className='text-9xl'> {counter} </span>

            <div className='flex items-center justify-center mt-4'>
                <button
                    onClick={() => handleIncrement(-1)}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>
                    -1
                </button>
                <button
                    onClick={() => handleIncrement(1)}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>
                    +1
                </button>
            </div>

        </div>
    )
}

