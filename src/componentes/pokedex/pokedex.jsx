import PokemonLIst from "../pokemonList/pokemonList";
import Search from "../search/Search";
// css import
import './pokedex.css'
function Pokedex(){
    return (
        <div className="pokedex-wrapper">
            <Search/>
            <PokemonLIst/>
        </div>
    );
}
export default Pokedex;