import { fetchCharacters } from "../../index.js";



const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');



// export default function Pagination() {

//     nextButton.addEventListener("click", () => {
//         console.log("hi");
//     })

// }
export default function Pagination(page, maxPage) {
    nextButton.addEventListener("click", () => {
        if (page >= maxPage) {
          return;
        }
        page++;
        console.log(page);
        fetchCharacters();
      })
      
      prevButton.addEventListener("click", () => {
        if (page <= 1) {
          return;
        }
        page--;
      
        console.log(page);
        fetchCharacters();
      
      })
}
