let list = [];

async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=40&limit=70');
        if (!response.ok) {
            throw new Error("Could not fetch response");
        }

        const data = await response.json();
        const pokemon = data.results;

        for (let index = 0; index < pokemon.length; index++) {
            const pokemonDetailResponse = await fetch(pokemon[index].url);
            const pokemonDetail = await pokemonDetailResponse.json();

            // Fetch species data for description
            const speciesResponse = await fetch(pokemonDetail.species.url);
            const speciesData = await speciesResponse.json();

            // Get description from species data
            const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || 'No description available';

            const pokemonInfo = {
                name: pokemonDetail.name,
                image: pokemonDetail.sprites.front_default,
                url: pokemonDetail.url,
                description: description
            };

            list.push(pokemonInfo);
            displayPokemon(pokemonInfo);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayPokemon(pokemon) {
    const pokemonList = document.getElementById('pokemon-list');
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    card.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p>${pokemon.description}</p>
        <a href="#" onclick="showDetails('${pokemon.url}')">More details</a>
    `;
    pokemonList.appendChild(card);
}

function showDetails(url) {
    localStorage.setItem('pokemonUrl', url);
    window.open('../details.html', '_blank');
}

// Fetch and display Pokémon data
fetchData();
