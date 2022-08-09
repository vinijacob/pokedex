let pokeNumber = 200
let url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`

console.log(url)

function getPokemon() {
    fetch(url)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.clear()
        console.log(data)

        document.querySelector('.poke_name').innerHTML = data['name'].toUpperCase()
        document.querySelector('.poke__peso').innerHTML = `Peso: ${data['weight']}kg`
        document.querySelector('.poke__altura').innerHTML = `Altura: ${data['height']}m`

        let img = data['sprites']['front_default']
        document.querySelector('.poke_img').setAttribute('src', img)
    })
}

document.querySelector('.btn_forw').addEventListener('click', () => {
    pokeNumber++
    console.log(url)
    console.log(pokeNumber)
})

document.querySelector('.btn_backw').onclick = () => {
    pokeNumber--
    console.log(url)
    console.log(pokeNumber)
}

getPokemon()
changePokemon()