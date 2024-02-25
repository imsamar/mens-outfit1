function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  search(searchInputElement.value);
  let google = `google = 'https://www.google.com/search?q=site%3A`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
