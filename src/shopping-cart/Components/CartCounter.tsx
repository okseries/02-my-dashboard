"use client"
import { useAppDispatch, useAppSelector } from '@/src/store'
import { addOne, initCounterState, resetCount, subStractOne } from '@/src/store/counter/counterSlice'
import { useEffect } from 'react'

interface Props {
    value?: number
}


interface CounterResponse {
  method: string;
  count: number;
}


const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter')
  .then(res => res.json());

  console.log('CounterResponse', data);
  

  return data;
}

export const CartCounter = ({value = 0}: Props) => {
    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //   dispatch(initCounterState(value));
    // }, [dispatch, value])

    useEffect(() => {
        getApiCounter()
        .then(({count}) => {
            dispatch(initCounterState(count));
        })
    }, [dispatch]);
    
    

    return (
        <div className='flex flex-col items-center justify-center '>
            <span className='text-9xl'> {count} </span>

            <div className='flex items-center justify-center mt-4'>
                <button
                    onClick={()=> dispatch(subStractOne())}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>
                    -1
                </button>
                <button
                    onClick={()=> dispatch(addOne())}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>
                    +1
                </button>
            </div>

        </div>
    )
}

