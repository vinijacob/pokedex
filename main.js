let pokeNumber = 25
let pokeName = 'bulbasaur'
let input = document.querySelector('.input__search')



function getPokemon(el) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${el}`)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data)

        document.querySelector('.pokemon__name').innerHTML = data['name']
        document.querySelector('.pokemon__number').innerHTML = data['id']

        let img = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        document.querySelector('.pokemon__image').setAttribute('src', img)
    })
}

getPokemon(pokeNumber)

document.querySelector('.btn-next').addEventListener('click', () => {
    pokeNumber++
    getPokemon(pokeNumber)
    if (pokeNumber > 905) {
        alert('Não há pokemons neste número')
        pokeNumber = 905;
    }
})


document.querySelector('.btn-prev').addEventListener('click', () => {
    pokeNumber--
    getPokemon(pokeNumber)
    if (pokeNumber <= 0) {
        alert('Não há pokemons neste número')
        pokeNumber = 1;
    }
})