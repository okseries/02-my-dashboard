import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard"

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap gao-10 items-center justify-center">
            {
                pokemons.map(pokemon => (
                    <div
                        className="flex items-center justify-center p-2"
                        key={pokemon.id}
                    >
                        

                       <PokemonCard pokemon={pokemon}/>

                    </div>
                ))
            }

        </div>
    )
}