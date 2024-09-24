import { useEffect } from "react";
import{useState} from "react";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);
      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        console.log(data);
        return data;
      });
      console.log(detailedPokemonData);
      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  if(!pokemon){
      return <h1>Loading...</h1>
  }
  return (
    <>
      <section className="container">
        <header>
            <h1>Lets Catch Pokemon</h1>
        </header>
        <div>
            <ul className="cards">
                {pokemon.map((currPokemon)=>{
                    return <li key={currPokemon.id}>{currPokemon.height}</li>
                })}
            </ul>
        </div>
      </section>
    </>
  )
};
export default Pokemon;
