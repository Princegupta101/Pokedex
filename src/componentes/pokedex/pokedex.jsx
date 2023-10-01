import { useState } from "react";
import PokemonLIst from "../pokemonList/pokemonList";
import Search from "../search/Search";
// css import
import './pokedex.css'
import PokemonDetails from "../pokemonDetails/pokemonDetails";
function Pokedex(){
    const[searchTerm , setSearchTerm]=useState('')
    return (
        <div className="pokedex-wrapper">
            <Search updateSearchTerm={setSearchTerm}/>
            {(!searchTerm)?<PokemonLIst/>:<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    );
}
export default Pokedex;