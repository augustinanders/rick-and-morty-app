export default function createCharacterCard(character) {
    const cardList = document.querySelector('[data-js="card-container"]');
    const newCard = document.createElement("li");
    newCard.className ="card";


    newCard.innerHTML =`
  <div class="card__image-container">
    <img
      class="card__image"
      src="${character.image}"
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${character.name}z</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${character.status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${character.type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${character.episode.length}</dd>
    </dl>
  </div>`

  cardList.append(newCard);
}


