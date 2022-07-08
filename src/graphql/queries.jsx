import {gql} from '@apollo/client'

export const GET_POKES = gql`
query get_pokemons($offset: Int!){ 
  pokemon_v2_pokemon(offset: $offset, limit: 30) {
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