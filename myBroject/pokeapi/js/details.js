async function fetchPokemonDetails() {
    const url = localStorage.getItem('pokemonUrl');
    
    if (!url) {
        document.getElementById('pokemon-name').innerText = "No Pokémon found.";
        return;
    }

    try {
        const response = await fetch(url);
        const pokemon = await response.json();

        const speciesResponse = await fetch(pokemon.species.url);
        const speciesData = await speciesResponse.json();

        // Get the English description
        const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || 'No description available';

        // Update the HTML with Pokémon data
        document.getElementById('pokemon-name').innerText = pokemon.name.toUpperCase();
        document.getElementById('pokemon-image').src = pokemon.sprites.front_default;
        document.getElementById('pokemon-description').innerText = description;
    } catch (error) {
        console.error("Error fetching Pokémon details:", error);
    }
}

// Fetch Pokémon details when the page loads
fetchPokemonDetails();
