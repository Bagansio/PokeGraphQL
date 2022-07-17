import {get_sprite, pad} from '../utils.js'
import { useEffect, useState, useContext, createContext } from 'react'
import '../styles/Types.css'
import {featuredContext} from '../hooks/pokemon'

export const Pokemon = (props) => {
    var [pokemon] = useState(props.pokemon);
    var [styles, setStyles] = useState('Poke');
    const render_type = (type) => {
        return <div className={['Poke-type',type.pokemon_v2_type.name].join(' ')}>{type.pokemon_v2_type.name}</div>
    } 
    

    const {featured, setFeatured} = useContext(featuredContext);
    var isFeatured = featured === pokemon.id;

    useEffect(() => {
        if(isFeatured)
            setStyles(styles.concat(' featured'))
        else
            setStyles('Poke')
     },[featured,pokemon, setStyles])

    function handle_more_info(){
        setFeatured(pokemon.id)
    }




    return (
        <div className={styles} onClick={handle_more_info}>
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
                { isFeatured && 
                    <div>
                        <div>
                            Height: {pokemon.height / 10} m
                        </div>
                        <div>
                            Weight: {pokemon.weight / 10} kg
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}
