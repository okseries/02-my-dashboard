"use client"
import React, { useState } from 'react'
import { PokemonGrid } from './pokemonGrid'
import { useAppSelector } from '@/src/store';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons));
    const [pokemons, setPokemons] = useState(favoritePokemons)


    return (
        <>
            {
                pokemons.length === 0
                    ? (<Nofavorites />)
                    : (<PokemonGrid pokemons={pokemons ?? []} />)

            }
            
        </>
    )
}


export const Nofavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span className="text-2xl text-gray-500">No tienes pokémons favoritos</span>
        </div>
    )
}

