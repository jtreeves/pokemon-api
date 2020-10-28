const container = document.querySelector('.container');

fetch('https://pokeapi.co/api/v2/pokemon/venusaur')
.then(response => {
    if (response.status === 200) {
        return response.json();
    }
})
.then(pokemon => {
    const venusaur = {
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        ability: pokemon.abilities[0].ability.name,
        move: pokemon.moves[5].move.name,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        purchaseLink: 'https://www.amazon.com/Pokemon-Venusaur-102-Base-Holo/dp/B002NXOBAC'
    }
    const venusaurCard = makePokemonCard(venusaur);
})
.catch(error => {
    console.log(error);
})

function makePokemonCard(pokemon) {
    // Create div element, add a class, add style
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    // Create image tag, add class, add source, add alt; append to card div
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.image);
    image.setAttribute('alt', `This is ${pokemon.name}`);
    card.appendChild(image);
    // Create another div, add class
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    // Create h5 element, add class, add text
    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = pokemon.name;
    // Create p tag, add class, add text
    const height = document.createElement('p')
    height.classList.add('card-text');
    height.textContent = `Height: ${pokemon.height}`;
    const weight = document.createElement('p')
    weight.classList.add('card-text');
    weight.textContent = `Weight: ${pokemon.weight}`;
    const move = document.createElement('p')
    move.classList.add('card-text');
    move.textContent = `Move: ${pokemon.move}`;
    const ability = document.createElement('p')
    ability.classList.add('card-text');
    ability.textContent = `Ability: ${pokemon.ability}`;
    // Create a tag, add 2 classes, add href, add text
    const purchaseLink = document.createElement('a');
    purchaseLink.classList.add('btn', 'btn-primary');
    purchaseLink.setAttribute('href', pokemon.purchaseLink);
    purchaseLink.textContent = `Buy ${pokemon.name} card`;
    // Append to card-body div
    cardBody.appendChild(nameElement);
    cardBody.appendChild(height);
    cardBody.appendChild(weight);
    cardBody.appendChild(move);
    cardBody.appendChild(ability);
    cardBody.appendChild(purchaseLink);
    // Append card-body div to card
    card.appendChild(cardBody);
    // Append card div to container div
    container.appendChild(card);
    return card;
}



{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}