document.querySelector('.pokemonNumber').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        fetchPokemon();
    }
});

function fetchPokemon() {
    const pokemonNumber = document.querySelector('.pokemonNumber').value;           //takes value from when entered
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)                     //send request to api including pokemonnumber using fetch
        .then(response => response.json())                                          //then we get response which is to be converted to json format
        .then(data => {                                                             //then response json passed to data
            const pokemonName = data.name;                                          //name of data is retrived
            const pokemonImage = data.sprites.front_default;                        //brings image of pokemon using it
            const pokemonContainer = document.querySelector('.pokemonContainer');   //then innerhtml is used to diplay the updated names and images
            pokemonContainer.innerHTML = `
                <div class="pokemon-card">
                    <h2>${pokemonName}</h2>
                    <img src="${pokemonImage}" alt="${pokemonName}" class="pokemon-image">
                </div>
            `;
        })
        .catch(error => console.error('Error:', error));                            //works when there is a error show error message
}
