import axios from "axios";
import { useEffect, useState } from "react";

function usePokemondetail({id}){
    const [pokemon,setPokemon]=useState({});
    async function downloadPokemon(){
        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name: response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types: response.data.types.map((t)=>t.type.name)
        })
    }
    useEffect(()=>{
        downloadPokemon()
    },[])
    return[pokemon];
}
export default usePokemondetail;