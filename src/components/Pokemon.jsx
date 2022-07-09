import {get_sprite, pad} from '../utils.js'

export const Pokemon = ( {pokemon}) => {
    return (
        <div className="Poke">
            <div className="Poke-sprite">
                <img src={get_sprite(pokemon.id)} />
            </div>
            
            <div className="Poke-info">
                <div className="Poke-id">N.º{pad(pokemon.id)}</div>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                
                <div className="Poke-types">
                    {pokemon.pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name).join(' ')}
                </div>
            </div>
            
        </div>
    )
}

//