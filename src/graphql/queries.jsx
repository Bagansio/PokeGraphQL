import {gql} from '@apollo/client'
import {POKEMON_NUM} from '../utils'

export const GET_POKES = gql`
query get_pokemons($offset: Int!){ 
  pokemon_v2_pokemon(offset: $offset, limit: 5) {
    name
    id
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
        id
      }
    }

  }
}`


export const GET_SEARCH_POKES = gql`
query get_search_pokemons($search_value: String!) {
  pokemon_v2_pokemon(where: {id: {_lte: ${POKEMON_NUM}}, name: {_iregex: $search_value}}){
    name
    id
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
        id
      }
    }
  }
}`