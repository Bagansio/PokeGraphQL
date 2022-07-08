import {Pokemon} from './Pokemon'

export const Pokemons = ( {pokemons}) => {

    
    return (
            <div className='Poke-grid'>
                {pokemons.map(poke => <Pokemon key={poke.id} pokemon={poke}/>)}
            </div>
    )
}
