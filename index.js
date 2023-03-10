import createCharacterCard from "./components/card/card.js";
import Pagination from "./components/nav-pagination/nav-pagination.js";
import Search from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
/* const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
); */

const pagination = document.querySelector('[data-js="pagination"]');

// States

export let maxPage = 1;
export let page = 1;
let searchQuery = "";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters() {
  try {
    const response = await fetch(
      `${RICK_AND_MORTY_API_URL}?page=${page}&name=${searchQuery}`
    );

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

Search((seachQueryValue)=>{
  searchQuery = seachQueryValue;
});

//search bar


