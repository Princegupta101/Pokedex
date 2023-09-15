import { Route, Routes } from "react-router-dom";
import Pokedex from "../componentes/pokedex/pokedex";
import PokemonDetails from "../componentes/pokemonDetails/pokemonDetails";
function CoustomRoutes(){
    return(
        <Routes>
                <Route path="/" element={<Pokedex/>}/>
                <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>
    );
}
export default CoustomRoutes;