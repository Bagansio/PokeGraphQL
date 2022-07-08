import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery, useLazyQuery} from '@apollo/client'
import { render } from 'react-dom'
import {Pokemons} from './components/Pokemons'
import {GET_POKES} from './graphql/queries'


function App() {
  var [offset] = useState(150);
  const [runQuery] = useLazyQuery(GET_POKES); 
  const {data, error, loading} = useQuery(GET_POKES,{
    variables: {
      offset: offset
    }
  });

  const next_page = async () =>{
      offset += 30
      
      const response = await runQuery({
        variables: {
          offset: offset,
        }
      });
      
      if (response !== undefined && ! response.loading){
        console.log("YEPa")
        pokes = response.data.pokemon_v2_pokemon
      }
      
      console.log(response)
      
  }

 

  console.log(data)
  if (error) return <span style='color: red'>{error}</span>
  if(loading)
      return <p>Loading...</p>

  var pokes = data.pokemon_v2_pokemon

  return (
    <div className="App">
      Pokemons
      <button onClick={next_page}>next</button>
      <Pokemons pokemons={pokes}/>
    </div>
  )
}

export default App
