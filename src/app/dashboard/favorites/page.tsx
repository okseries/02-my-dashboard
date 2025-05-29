import { FavoritePokemons } from "@/src/pokemons";



export const metadata = {
  title: 'Favoritos',
  description: 'Listado de pokémons estático',
}


const PokemonsPage = async () => {
  
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Mis pokémons favoritos <small className="text-blue-500">Global State</small></span>

      <FavoritePokemons/>

    </div>
  )
}

export default PokemonsPage;



