import createCharacterCard from "./components/card/card.js";
import Pagination from "./components/nav-pagination/nav-pagination.js";

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

export let maxPage = 1;
export let page = 1;
const searchQuery = "";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters() {
  try {
    const response = await fetch(`${RICK_AND_MORTY_API_URL}?page=${page}`);

    if (!response.ok) {
      console.error("API FETCH FAILED");
      return;
    }
    // Create Character Object Array
    const data = await response.json();
    const characters = data.results;
    console.log(data);

    cardContainer.innerHTML = ""; // reset card Container
    // Use Character Object to create a new card for each Character
    characters.forEach((arr) => {
      createCharacterCard(arr);
    });

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error(error);
  }
}

fetchCharacters();

Pagination(
  () => {
    if (page >= maxPage) {
      return;
    }
    page++;
    console.log(page);
    fetchCharacters();
  },
  () => {
    if (page <= 1) {
      return;
    }
    page--;
    console.log(page);
    fetchCharacters();
  }
);
