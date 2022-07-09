import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery, useLazyQuery} from '@apollo/client'
import { render } from 'react-dom'
import {Pokemons} from './components/Pokemons'
import {GET_POKES} from './graphql/queries'
import {POKEMON_NUM, mod} from './utils'


function App() {
  var [offset, setOffset] = useState(0);
  var [pokes, setPokes] = useState();
  //const [runQuery] = useLazyQuery(GET_POKES); 

  const {data, error, loading} = useQuery(GET_POKES,{
    variables: {
      offset: offset
    }
  });

  useEffect(() => {
    if(! loading && data){
      setPokes(data.pokemon_v2_pokemon);
    }
  }, [loading, data])

  const next_page = () =>{
    setOffset(mod(offset+5, POKEMON_NUM))
  }

  const prev_page = () =>{
    
    setOffset(mod(offset-5, POKEMON_NUM))

    console.log('list:' + offset)
  }


  if(loading)
      return (<p>Loading...</p>)
  if (error) 
      return (<span style='color: red'>{error}</span>)
  

  return (
    <div className="App">
      <button onClick={prev_page}> prev </button>
      Pokemons
      <button onClick={next_page}>next</button>
      <Pokemons pokemons={data.pokemon_v2_pokemon}/>
    </div>
  )
}

export default App
