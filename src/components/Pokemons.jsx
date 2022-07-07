import {Pokemon} from './Pokemon'

export const Pokemons = ( {pokemons}) => {
    return (
        <div>
            <h2>Pokemons</h2>
            {pokemons.map(poke => <Pokemon key={poke.id} pokemon={poke}/>)}
        </div>
    )
}
