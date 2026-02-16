
🎬 Movie Finder – JavaScript Capstone Project
👩‍💻 Author
Abhishek
Course: JavaScript Developer’s Handbook & Capstone
GitHub: https://github.com/abhishek2026ab/movie-finder


📌 Project Overview
Movie Finder is a Single Page Application (SPA) built using Vanilla JavaScript.

It allows users to:

Search movies using a live public API

Dynamically render movie cards

Save favorite movies using LocalStorage

Handle API failures gracefully

Maintain state after page refresh

This project demonstrates practical implementation of ES6+, DOM manipulation, asynchronous JavaScript, and browser storage.

🚀 Features
🔍 Search bar with live API calls

🎬 Dynamic movie cards generated via JavaScript

💾 Favorite system using LocalStorage

⚠️ Proper error handling

⏳ Loading state while fetching data

🌐 Hosted using GitHub Pages

🛠 Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Fetch API

OMDB Public API

Git & GitHub

🌐 API Used
OMDB API

Example endpoint:

https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
The app uses:

fetch() to request data

async/await to handle asynchronous flow

try/catch for error handling

🧠 How I Built This
1️⃣ Core Logic Flow
User enters a movie name

Click event triggers API call

fetchMovies() runs asynchronously

Response is converted to JSON

Movie cards are generated dynamically

Favorites are saved to LocalStorage

2️⃣ Dynamic DOM Creation
Movies are NOT hardcoded in HTML.

Instead, cards are created using:

document.createElement()
innerHTML
appendChild()
This ensures scalability and fulfills dynamic rendering requirements.

3️⃣ Asynchronous Data Handling
Used modern async/await:

async function fetchMovies(query) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(data.Search);
  } catch (error) {
    showError(error.message);
  }
}
Why async/await?

Cleaner than callbacks

Avoids callback hell

Easy error handling with try/catch

4️⃣ Error Handling Strategy
The app handles:

Empty input

Network failures

API returning no results

Instead of crashing, it shows a user-friendly message.

5️⃣ LocalStorage Implementation
Favorites are stored using:

localStorage.setItem("favorites", JSON.stringify(favorites));
And retrieved using:

JSON.parse(localStorage.getItem("favorites"));
This ensures persistence even after page refresh.

🧩 JavaScript Concepts Demonstrated
ES6+ Features
let / const

Arrow functions

Template literals

Destructuring

Spread operator

Array Methods
map()

filter()

forEach()

DOM Manipulation
querySelector()

addEventListener()

createElement()

innerHTML

Asynchronous JavaScript
Promises

Async/Await

Event Loop concept

Error handling

🔄 Event Loop (Simple Explanation)
JavaScript is single-threaded.

When an API call is made:

The browser sends it to Web APIs

JavaScript continues executing other code

Once response returns, callback is placed in the queue

Event Loop pushes it back to the call stack

This prevents the UI from freezing.

📂 Project Structure
movie-finder/
│
├── index.html
├── style.css
├── script.js
└── README.md
🏁 How To Run Locally
Clone repository:

git clone https://github.com/yourusername/movie-finder.git
Open index.html in browser.

No backend required.

🌍 Deployment
Hosted using GitHub Pages.

Steps:

Push to main branch

Enable Pages in Settings

Deploy from root folder

Live URL:
https://yourusername.github.io/movie-finder/

🎯 Assignment Requirements Checklist
Requirement	Status
Live API Fetch	✅
Search Interaction	✅
Dynamic DOM	✅
LocalStorage Persistence	✅
Error Handling	✅
Async/Await	✅
GitHub Hosting	✅
📈 Possible Improvements (Future Scope)
Pagination

Movie details modal

Dark mode toggle

Search history

Debounced input search

🏆 Conclusion
This project demonstrates practical understanding of:

Modern JavaScript

Asynchronous programming

Browser storage

Dynamic UI rendering

Clean project structure

It reflects real-world frontend development practices.
