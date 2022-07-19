import {get_sprite, pad, featuredContext} from '../utils'
import { useEffect, useState, useContext, createContext } from 'react'
import '../styles/Types.css'
import { useQuery, useLazyQuery} from '@apollo/client'
import {GET_POKE_DATA} from '../graphql/queries'

export const Pokemon = (props) => {

    const [pokemon] = useState(props.pokemon);

    const [styles, setStyles] = useState('Poke');
    const [info, setInfo] = useState(null);
    const render_type = (type) => {
        return <div className={['Poke-type',type.pokemon_v2_type.name].join(' ')}>{type.pokemon_v2_type.name}</div>
    } 
    

    const {featured, setFeatured} = useContext(featuredContext);
    
    var isFeatured = featured === pokemon.id;

    const [fetchQuery, {loading, error, data}] = useLazyQuery(GET_POKE_DATA);


    useEffect(() => {
        if (isFeatured){
            setStyles(styles.concat(' featured'));
            if(info === null && isFeatured){
                fetchQuery({ variables: {
                    poke_id: pokemon.id
                }})
                if(! loading && ! error && data !== undefined)
                    setInfo(data.pokemon_v2_pokemonspecies[0])
                
            }
        }
        else
            setStyles('Poke');
     },[featured,pokemon, setStyles, data, loading, error, setInfo, info])

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

                { isFeatured && <br/>}

                <div className="Poke-types">
                    {pokemon.pokemon_v2_pokemontypes.map(render_type)}
                </div>
                { isFeatured && info !== null && 
                
                    <div className="Featured-info">
                        <br/>
                        <div className='Poke-Weight-Height'>
                            <div className="Poke-Height">
                                Height: {pokemon.height / 10} m
                            </div>
                            <div className="Poke-Weight">
                                Weight: {pokemon.weight / 10} kg
                            </div>
                        </div>
                        <br/>
                        <div className="Poke-desc">
                            <p>Description: </p>
                            {info.pokemon_v2_pokemonspeciesflavortexts[info.pokemon_v2_pokemonspeciesflavortexts.length-1].flavor_text}
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}
