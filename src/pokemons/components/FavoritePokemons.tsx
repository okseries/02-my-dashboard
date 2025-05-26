"use client"
import React from 'react'
import { PokemonGrid } from './pokemonGrid'
import { useAppSelector } from '@/src/store';

export const FavoritePokemons = () => {

    const pokemons = useAppSelector((state) => Object.values(state.pokemons));

    return (
        <PokemonGrid pokemons={pokemons ?? []} />
    )
}

