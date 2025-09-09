import { names } from "./data.js";

const listContainer = document.querySelector(".js-name-list");
const input = document.querySelector("input[name=search]");

input.addEventListener("input", debounce(filterNames));

listContainer.innerHTML = createMarkup(names);

function createMarkup(data) {
  return data.map(({ name }) => `<li>${name}</li>`).join("");
}

function filterNames(evt) {
  const filter = evt.target.value.toLowerCase();

  const filteredNames = names.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  listContainer.innerHTML = createMarkup(filteredNames);
}

function debounce(callback, delay = 500) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
