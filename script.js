const searchField = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('button');
const results = document.querySelector('#results');

searchForm.addEventListener('submit', fetchPokemon);
// submitBtn.addEventListener('click', )

function fetchPokemon(event) {
    event.preventDefault();
    console.log(event)
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchField.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            displayPokemon(data);
        });
}

    //async await
    // const fetchMovies = asyn () => {
        // const response = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
        //const data = await response.json()
        // console.log("cool we got the data")
   // }

    function displayPokemon(data) {
        console.log(data);

        // create the elements
        let pokemonName = document.createElement('h1');
        let pokemonWeight = document.createElement('h2');
        let pokemonHeight = document.createElement('p');

        // assign the elements information from the data we fetched
        pokemonName.innerText = data.name;
        pokemonWeight.innerText = data.weight;
        pokemonHeight.innerText = data.height;
        

        // append the info for user to see
        results.appendChild(pokemonName);
        results.appendChild(pokemonWeight);
        results.appendChild(pokemonHeight);

        // for(let pokemon of data) {
        //     console.log(pokemon.ability.name)
        //     let resultsContainer = document.getElementById("results")
        //     let name = document.createElement("p");

        //     name.innerText = pokemon.ability.name

        //     resultsContainer.appendChild(name);
        // }
    }