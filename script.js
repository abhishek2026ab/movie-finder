const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const moviesContainer = document.getElementById("moviesContainer");
const errorMessage = document.getElementById("errorMessage");

const API_KEY = f02d18f2;

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();

    if (query === "") {
        showError("Please enter a movie name.");
        return;
    }

    fetchMovies(query);
});

async function fetchMovies(query) {
    try {
        errorMessage.textContent = "";
        moviesContainer.innerHTML = "Loading...";

        const response = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();

        if (data.Response === "False") {
            throw new Error(data.Error);
        }

        displayMovies(data.Search);

    } catch (error) {
        showError(error.message);
    }
}

function displayMovies(movies) {
    moviesContainer.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <button onclick="addToFavorites('${movie.imdbID}')">
                Add to Favorites
            </button>
        `;

        moviesContainer.appendChild(card);
    });
}

function addToFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Added to favorites!");
    }
}

function showError(message) {
    moviesContainer.innerHTML = "";
    errorMessage.textContent = message;
}

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

