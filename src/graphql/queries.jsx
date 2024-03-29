import {gql} from '@apollo/client'
import {POKEMON_NUM, POKEMON_LENGUAGE} from '../utils'


const POKEMON_DATA = `
  name
  id
  height
  weight
  pokemon_v2_pokemontypes {
    pokemon_v2_type {
      name
      id
    }
  }
`

export const GET_POKES = gql`
query get_pokemons($offset: Int!){ 
  pokemon_v2_pokemon(offset: $offset, limit: 10) {
    ${POKEMON_DATA}

  }
}`


export const GET_SEARCH_POKES = gql`
query get_search_pokemons($search_value: String!) {
  pokemon_v2_pokemon(limit: 30, where: {id: {_lte: ${POKEMON_NUM}}, name: {_iregex: $search_value}}){
    ${POKEMON_DATA}
    
  }
}`


export const GET_POKE_DATA = gql`
query get_pokemon_data($poke_id: Int!) {
  pokemon_v2_pokemonspecies(where: {id: {_eq: $poke_id}}) {
    pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: ${POKEMON_LENGUAGE}}}) {
      flavor_text
    }
  }
}
`