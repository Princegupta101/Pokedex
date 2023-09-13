import { useEffect, useState,  } from "react";
import axios from 'axios';
import './pokemonList.css'
import Pokemon from "../pokemon/pokemon";

function PokemonLIst(){
     
    const[pokemonList, setpokemonList]=useState([]);
    const[isLoading, setIsLoading]=useState(true);

    const [POKEDEX_URL, setPOKEDEX_URL]=useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl]= useState('');
    const[prevUrl, setPrevUrl]= useState('');

    async function downloadPokemon(){
        setIsLoading(true);

        const response = await axios.get(POKEDEX_URL);    //this download list of 20 pokemon
        const pokemonResults= response.data.results; // We get the array of pokemon from result
        //iterating over the array of pokemon , and using their url , to create an array of promises  
        // that will download those 20 pokemon 
        console.log(response.data)
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
       const pokemonResultPromies= pokemonResults.map((pokemon)=>axios.get(pokemon.url))

        //passing  that promises array to axios .all
        const pokemonData= await axios.all(pokemonResultPromies); // array of 20 pokemon detailed data
        //now iteratre on the data of each pokemon ,and extarct id, name , image, types
        const PokeListResult=  pokemonData.map((pokeData)=>{
            const pokemon =pokeData.data;
            return{
                id:  pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other)? 
                pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
                types: pokemon.types,
            }
        });
        console.log(PokeListResult);
        setpokemonList(PokeListResult);
        setIsLoading(false) ;
    
    }
    useEffect( ()=>{
        downloadPokemon();
    }, [POKEDEX_URL])

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper"> 
                {(isLoading)? 'Loading....': 
                pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)
                }
            </div>
            <div className="controls">
                <button  disabled={prevUrl==null}  onClick={()=>setPOKEDEX_URL(prevUrl)}>Prev</button>
                <button disabled={nextUrl==null}  onClick={()=>setPOKEDEX_URL(nextUrl)}>Next</button>
            </div>
        </div>
    )
}
export default PokemonLIst;