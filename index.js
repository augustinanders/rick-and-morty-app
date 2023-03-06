const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";


const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  try {
    const response = await fetch(RICK_AND_MORTY_API_URL);

    if (!response.ok) {
      console.error("API FETCH FAILED");
      return;
    }
    const data = await response.json();
    const characters = data.results;
    console.log(characters);
    return characters;

  } catch (error) {
    console.error(error);
    return;
  }
}

fetchCharacters()