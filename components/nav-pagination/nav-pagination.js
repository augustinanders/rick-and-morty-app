const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export default function Pagination(onNextButtonClick, onPrevButtonClick) {
  nextButton.addEventListener("click", () => {
    onNextButtonClick();
  });

  prevButton.addEventListener("click", () => {
    onPrevButtonClick();
  });
}
