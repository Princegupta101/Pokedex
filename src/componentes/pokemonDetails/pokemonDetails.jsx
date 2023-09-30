import './pokemonDetails.css'
import { useParams } from "react-router-dom";
import usePokemondetail from "../hooks/usePokemondetail";

function PokemonDetails(){
    const {id}= useParams();
    const[pokemon]=usePokemondetail({id})
    console.log(pokemon.samePokemonlist);
    return(
        <div >
            <div className="pokemon-details-wrapper">
                < img className="pokemon-details-image"src={pokemon.image}/>
                    <div>
                        <div className="pokemon-details-name"><span>{pokemon.name}</span></div>  
                        <div className="pokemon-details-name">Weight:{pokemon.weight}</div>
                        <div className="pokemon-details-name">Height:{pokemon.height}</div>
                        <div className="pokemon-details-types">
                             { pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div> )}
                        </div>
                    </div>
            </div>
            <div className='Typesname'>
            {
                pokemon.types && pokemon.samePokemonlist &&
                <div>
                    <h1> More  {pokemon.types[0]}  type pokemons </h1> 
                    <ul className='listpokemon'>
                            {pokemon.samePokemonlist.map((p)=><li>{p.pokemon.name}</li>)}
                    </ul>
                </div>
            }
            </div>
        </div>
    );

}
export default PokemonDetails;