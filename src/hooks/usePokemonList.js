import { useEffect, useState,  } from "react";
import axios from 'axios';
function usePokemonList(){
    const[pokemonListState, setPokemonListState]=useState({
        pokemonList:[],
        isLoading: true,
        POKEDEX_URL:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:'',
    })

    async function downloadPokemon(){
        setPokemonListState((state)=>({...state, isLoading:true}));
        const response = await axios.get(pokemonListState.POKEDEX_URL);    //this download list of 20 pokemon
        const pokemonResults= response.data.results; 

        // We get the array of pokemon from result
        //iterating over the array of pokemon , and using their url , to create an array of promises  
        // that will download those 20 pokemon 

        // console.log(response.data)

        setPokemonListState((state)=>({
            ...state, 
            nextUrl : response.data.next,
            prevUrl: response.data.previous,
        }));

    const pokemonResultPromies= pokemonResults.map((pokemon)=>axios.get(pokemon.url))//passing  that promises array to axios .all
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
    // console.log(PokeListResult);
    setPokemonListState((state)=>({
        ...state,
        pokemonList: PokeListResult,
        isLoading:false,
    }));  
    }
    useEffect( ()=>{
        downloadPokemon();
    }, [pokemonListState.POKEDEX_URL]);

    return[pokemonListState,setPokemonListState]
}
export default usePokemonList;