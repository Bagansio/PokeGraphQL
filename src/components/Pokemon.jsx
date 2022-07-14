import {get_sprite, pad} from '../utils.js'
import '../styles/Types.css'

export const Pokemon = ( {pokemon}) => {

    const render_type = (type) => {
        return <div className={['Poke-type',type.pokemon_v2_type.name].join(' ')}>{type.pokemon_v2_type.name}</div>
    } 
    

    return (
        <div className="Poke">
            <div className="Poke-sprite">
                <img src={get_sprite(pokemon.id)} />
            </div>
            
            <div className="Poke-info">
                <div className="Poke-id">
                    N.º{pad(pokemon.id)}
                </div>
                <div className='Poke-name'> 
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.split('-')[0].slice(1)}
                </div>
                <div className="Poke-types">
                    {pokemon.pokemon_v2_pokemontypes.map(render_type)}
                </div>
            </div>
            
        </div>
    )
}

//