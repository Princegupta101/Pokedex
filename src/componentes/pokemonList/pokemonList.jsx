import './pokemonList.css'
import Pokemon from "../pokemon/pokemon";
import usePokemonList from '../../hooks/usePokemonList';

function PokemonLIst(){
    const[pokemonListState, setPokemonListState]=usePokemonList();
    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper"> 
                {(pokemonListState.isLoading)? 'Loading....': 
                pokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}  id={p.id}/>)
                }
            </div>
            <div className="controls">
                <button 
                    disabled={pokemonListState.nextUrl==null} 
                    onClick={()=>{
                        const urlToSet=pokemonListState.prevUrl;
                        setPokemonListState({...pokemonListState,POKEDEX_URL: urlToSet})
                    }}> prev
                </button>
                <button 
                    disabled={pokemonListState.nextUrl==null} 
                    onClick={()=>{
                        const urlToSet=pokemonListState.nextUrl;
                        setPokemonListState({...pokemonListState,POKEDEX_URL: urlToSet})
                    }}> Next
                </button>
            </div>
        </div>
    ) 
}
export default PokemonLIst;