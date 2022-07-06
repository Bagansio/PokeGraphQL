import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {gql, useQuery} from '@apollo/client'

const variables = null

const operationName = "getItems"

const GET_ITEMS = gql`
query getItems{
  pokemon_v2_item{
    name
    cost
  }
}`

const GET_POKES = gql`
query gen3_species { 
  pokemon_v2_pokemonspecies{
    name
    id
  }
}`


function App() {
  const [count, setCount] = useState(0)
  const {data, error, loading} = useQuery(GET_POKES)

  console.log(data)
  if (error) return <span style='color: red'>{error}</span>



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading 
          ? <p>Loading...</p>
          : (
            <>
              <p>PokeAPI GraphQL + React!</p>
              {
                data && data.pokemon_v2_pokemonspecies.map(poke => poke.name).join(', ') 
              }
            </>
          )
        }


      </header>
    </div>
  )
}

export default App
