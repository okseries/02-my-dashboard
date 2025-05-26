"use client"
import Link from 'next/link'

import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/src/store'
import { toogleFavorite } from '@/src/store/pokemons/pokemons'
interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const isFavorite = useAppSelector((state) => !!state.pokemons[pokemon.id]);
    const dispatch = useAppDispatch();

    const onToggle =()=> {
        dispatch(toogleFavorite(pokemon));
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">

                    <Image

                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                        priority={false}

                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${pokemon.name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más información
                        </Link>
                    </div>
                </div>
                <div className=" border-b ">
                    <button onClick={onToggle} className="flex items-center justify-center    w-full px-4 py-2 hover:bg-gray-100  cursor-pointer" >
                        {isFavorite ? (<IoHeart className='text-red-500' />) : (<IoHeartOutline />)}

                        <div className="pl-3">
                            {/* <p className="text-sm font-medium text-gray-800 leading-none">
                               <span> {isFavorite ? 'Es favorito' : 'No es favorito'}</span>
                            </p> */}
                            <p className="text-xs text-gray-500">
                                <span> {isFavorite ? 'Quitar de favoritos' : 'Agregar a fovoritos'}</span>
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

