import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import { useQuery, useLazyQuery} from '@apollo/client'
import { render } from 'react-dom'
import {Pokemons} from './components/Pokemons'
import {GET_POKES} from './graphql/queries'
import {POKEMON_NUM, mod} from './utils'
import {SearchBar} from './components/SearchBar'
import logoName from './static/logoName.png'
function App() {
  const [offset, setOffset] = useState(0);
  const [pokes, setPokes] = useState([]);

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

  function next_page (){
    setOffset(mod(offset+5, POKEMON_NUM))
  }

  function prev_page(){
    
    setOffset(mod(offset-5, POKEMON_NUM))

  }

  function random_page() {
    let new_offset = Math.floor(Math.random() * POKEMON_NUM)
    setOffset(new_offset - (new_offset % 5))
  }


  function setPokeList(new_list, value){
    if (value === '')
      setPokes(data.pokemon_v2_pokemon)
    else
      setPokes(new_list)
  } 
  

  /*if(loading)
      return (<p>Loading...</p>)*/
  if (error) 
      return (<span style='color: red'>{error}</span>)
  
  
  return (
    <div className="App">
      <br/>
      <img src={logoName}/>
      <SearchBar setPokes={setPokeList}/>
      <div>
        <button className="page-button" onClick={prev_page}> &#8249; </button>
        <button className="page-button" onClick={random_page}> random </button>
        <button className="page-button" onClick={next_page}> &#8250; </button>
      </div>
      
      <Pokemons pokemons={pokes}/>
    </div>
  )
}

export default App
