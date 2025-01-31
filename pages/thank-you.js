const queries = new URLSearchParams(window.location.search);
const selected = queries.get("selected");
document.querySelector(".number-selected").textContent = selected;
