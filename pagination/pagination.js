const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
];

const itemsPerPage = 5;
let currentPage = 1;

const displayItems = (items, container, itemsPerPage, page) => {
  container.innerHTML = "";
  page--;

  const start = itemsPerPage * page;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const itemElement = document.createElement("div");
    itemElement.textContent = paginatedItems[i];
    container.appendChild(itemElement);
  }
};

const setupPagination = (items, paginationContainer, itemsPerPage) => {
  paginationContainer.innerHTML = "";

  const pageCount = Math.ceil(items.length / itemsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    const btn = paginationButton(i, items);
    paginationContainer.appendChild(btn);
  }
};

const paginationButton = (page, items) => {
  const button = document.createElement("li");
  button.textContent = page;

  if (currentPage === page) button.classList.add("active");

  button.addEventListener("click", function () {
    currentPage = page;
    displayItems(
      items,
      document.getElementById("items-container"),
      itemsPerPage,
      currentPage
    );

    let currentBtn = document.querySelector("li.active");
    currentBtn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
};

document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.getElementById("items-container");
  const paginationContainer = document.getElementById("pagination");

  displayItems(items, itemsContainer, itemsPerPage, currentPage);
  setupPagination(items, paginationContainer, itemsPerPage);
});
