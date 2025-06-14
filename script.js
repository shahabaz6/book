// script.js

// Function to handle search on both Anna's Archive and Z-Library
function handleSearch() {
  const query = document.getElementById("searchBar").value.trim();

  if (query === "") {
    alert("Please enter a book name.");
    return;
  }

  // Construct search URLs
  const annaUrl = `https://annas-archive.org/search?q=${encodeURIComponent(
    query
  )}`;
  const zlibUrl = `https://z-lib.gs/s/${encodeURIComponent(query)}`;

  // Open both URLs in new tabs
  window.open(annaUrl, "_blank");
  window.open(zlibUrl, "_blank");
}

// Event listener for the "Search" button
document.getElementById("searchButton").addEventListener("click", handleSearch);

// Event listener for the "Enter" key
document.getElementById("searchBar").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
