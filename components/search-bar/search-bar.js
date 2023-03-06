import { fetchCharacters } from "../../index.js";

const searchBar = document.querySelector('[data-js="search-bar"]');
export default function Search(onSubmit){
    searchBar.addEventListener("submit", (event) => {
        event.preventDefault();
      
        const data = new FormData(event.target);
        const searchInput = Object.fromEntries(data);
        const searchQuery = searchInput.query;
      
        console.log(searchInput.query);
        fetchCharacters();
        event.target.reset();
        onSubmit(searchQuery);
      });
}

