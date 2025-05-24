import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons";



export const metadata = {
  title: 'Listado de Pokémons',
  description: 'Listado de pokémons estático',
}




const GetPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').slice(-2)[0], // Extracting the ID from the URL
    name: pokemon.name,
  }))

  // throw new Error('Error al cargar los pokemons');

  return pokemons;
}

const PokemonsPage = async () => {
  const pokemons = await GetPokemons(150);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons <small>Estático</small></span>

      <PokemonGrid pokemons={pokemons}/>

    </div>
  )
}

export default PokemonsPage
