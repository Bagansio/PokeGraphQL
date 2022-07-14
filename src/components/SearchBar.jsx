import { useEffect, useState } from 'react'
import { useQuery, useLazyQuery} from '@apollo/client'
import {GET_SEARCH_POKES, GET_POKES} from '../graphql/queries'


export const SearchBar = ({setPokes}) => {

    var [value, setValue] = useState(undefined)


    const handleChange = (e) => {

        setValue(e.target.value);

    }
    
    const {data, error, loading} = useQuery(GET_SEARCH_POKES,{
        variables: {
            search_value: '^'+value,
        }
    });

   
    useEffect(() => {
        
        if(! loading && data && value !== undefined){
            setPokes(data.pokemon_v2_pokemon)
        }
    }, [loading, data])

 
    return (
        <div className="search">
            <input type="text" value={value} onChange={handleChange} />
        </div>
    )
}