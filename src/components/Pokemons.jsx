import { createContext, useEffect, useState } from 'react'
import {Pokemon} from './Pokemon'
import {featuredContext} from '../hooks/pokemon'


export const Pokemons = ( {pokemons}) => {

     

    const [featured, setFeatured] = useState(undefined);
    const value = {featured, setFeatured}

    return (
            <div className='Poke-grid'>
                <featuredContext.Provider value={value}>
                    {pokemons.map(poke => <Pokemon key={poke.id} setFeatured={setFeatured} pokemon={poke}/>)}
                </featuredContext.Provider>
            </div>
    )
}
