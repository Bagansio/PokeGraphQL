const SPRITE_URI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
const DIGITS = 3

/**
 *  Transform the number into a string with length = DIGITS
 *  Example: number = 10 -> 010 
 * @param {integer} number 
 * @returns number in DIGITS format 
 */
export function pad(number) {
    var number_length = (''+number).length
    var len = DIGITS - number_length;
    
    return (len > 0 ? new Array(++len).join('0') : '') + number;
}


/**
 *  Returns the sprite src of the pokemon id
 * @param {integer} pokemon_id 
 * @returns {string} src
 */
export function get_sprite(pokemon_id) {
    return SPRITE_URI + pad(pokemon_id) + '.png';
}
