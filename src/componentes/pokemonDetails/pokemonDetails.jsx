import './pokemonDetails.css'
import { useParams } from "react-router-dom";
import usePokemondetail from "../hooks/usePokemondetail";

function PokemonDetails(){
    const {id}= useParams();
    const[pokemon]=usePokemondetail({id})
   
    return(
        <div className="pokemon-details-wrapper">
           < img className="pokemon-details-image"src={pokemon.image}/>
          <div className="pokemon-details-name"><span>{pokemon.name}</span></div>  
          <div className="pokemon-details-name">Weight:{pokemon.weight}</div>
          <div className="pokemon-details-name">Height:{pokemon.height}</div>
          <div className="pokemon-details-types">
                  { pokemon.types && pokemon.types.map((t) => 
                  <div key={t}>{t}</div>
                  )}
            </div>
        </div>
    );

}
export default PokemonDetails;