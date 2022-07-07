
export const Pokemon = ( {pokemon}) => {
    return (
        <div>
            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id +'.png'} />
            {pokemon.name}
        </div>
    )
}
