import './pokemon.css'
import { Link } from 'react-router-dom';

function Pokemon({name, image, id}){
    return(
        <div className='pokemon'>
            <Link to={`/pokemon/${id}`}>
                <div className='pokemon-name'>
                    {name}
                </div>
                <div >
                    <img src={image} className='pokemon-image' />
                </div>
            </Link>
        </div>

    );
}
export default Pokemon;