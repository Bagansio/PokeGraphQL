import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {gql, useQuery} from '@apollo/client'
import { render } from 'react-dom'
import {Pokemons} from './components/Pokemons'

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
query get_pokemons { 
  pokemon_v2_pokemon{
    id
    name
  }
}`


function App() {
  const [count, setCount] = useState(0)
  const {data, error, loading} = useQuery(GET_POKES)


  const render_pokes = () => {
    if(loading)
      return <p>Loading...</p>
    
    console.log(data) 
    if(data)
      return <Pokemons pokemons={data.pokemon_v2_pokemon}/>
    
    
    return <p> No Pokes </p>
    
  }
  console.log(data)
  if (error) return <span style='color: red'>{error}</span>



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {render_pokes()}
      </header>
    </div>
  )
}

export default App
