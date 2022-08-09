let pokeNumber = 1


function getPokemon(el) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${el}`)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        // console.clear()
        console.log(data)

        document.querySelector('.poke_name').innerHTML = data['name'].toUpperCase()
        document.querySelector('.poke__peso').innerHTML = `Peso: ${data['weight']}kg`
        document.querySelector('.poke__altura').innerHTML = `Altura: ${data['height']}m`

        let img = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        document.querySelector('.poke_img').setAttribute('src', img)
    })
}

getPokemon(pokeNumber)

document.querySelector('.btn_forw').addEventListener('click', () => {
    pokeNumber++
    getPokemon(pokeNumber)
    if (pokeNumber > 905) {
        alert('Não há pokemons neste número')
        pokeNumber = 905;
    }
})


document.querySelector('.btn_backw').addEventListener('click', () => {
    pokeNumber--
    getPokemon(pokeNumber)
    if (pokeNumber <= 0) {
        alert('Não há pokemons neste número')
        pokeNumber = 1;
    }
})