import './pokemon.css'

function Pokemon({name, image}){
    return(
        <div className='pokemon'>
            <div className='pokemon-nane'>{name}</div>
            <div className='pokemon-image'><img src={image}  /></div>
        </div>

    );
}
export default Pokemon;