import Search from "../search/Search";
// css import
import './pokedex.css'
function Pokedex(){
    return (
        <div className="pokedex-wrapper">
         <h1  id="pokedex-heading">   Pokedex</h1>
            <Search/>
        </div>
    );
}
export default Pokedex;