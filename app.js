// Wait for the DOM content to be loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  addEventListeners();
});

// Add event listeners to the buttons
function addEventListeners() {
  // Add event listener for the search button
  document
    .getElementById("search-button")
    .addEventListener("click", searchManga);

  // Add event listener for the show all button
  document
    .getElementById("show-all-button")
    .addEventListener("click", showAllManga);

  // Add event listener for the dark/light mode toggle button
  document
    .getElementById("toggle-button")
    .addEventListener("click", toggleDarkMode);
}

// Function to search for manga based on user input and sort order
async function searchManga() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const sortOrder = document.getElementById("sort-order").value;
  if (!query) return; // Exit if the search query is empty

  try {
    const response = await fetch("http://localhost:3000/manga");
    const data = await response.json();
    displayResults(data, query, sortOrder);
  } catch (error) {
    console.error("Error fetching manga:", error);
  }
}

// Function to show all manga, optionally sorted by title
async function showAllManga() {
  const sortOrder = document.getElementById("sort-order").value;

  try {
    const response = await fetch("http://localhost:3000/manga");
    const data = await response.json();
    displayResults(data, "", sortOrder); // Empty query to show all manga
  } catch (error) {
    console.error("Error fetching manga:", error);
  }
}

// Function to display manga results in the content div
function displayResults(data, query, sortOrder) {
  const contentDiv = document.getElementById("content");
  let filteredItems = data;

  // Filter items based on search query
  if (query) {
    filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }

  // Sort items based on sort order
  if (sortOrder === "asc") {
    filteredItems.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "desc") {
    filteredItems.sort((a, b) => b.title.localeCompare(a.title));
  }

  // Generate HTML for each manga item and insert into the content div
  contentDiv.innerHTML = filteredItems
    .map(
      (item) => `
        <div class="manga-item">
            <h2>${item.title}</h2>
            <p>Author: ${item.author}</p>
            <p>Description: ${item.description}</p>
            <img src="${item.poster}" alt="${item.title} Poster" class="poster">
            <button class="like-button">Like</button>
            <button class="rating-button">Rate</button>
            <div class="comment-section">
                <input type="text" placeholder="Add a comment..." class="comment-input">
                <button class="comment-button">Comment</button>
                <div class="comments"></div>
            </div>
        </div>
    `
    )
    .join(""); // Join the array into a single string

  // Add event listeners for like, rate, and comment buttons
  document
    .querySelectorAll(".like-button")
    .forEach((button) => button.addEventListener("click", likeManga));
  document
    .querySelectorAll(".rating-button")
    .forEach((button) => button.addEventListener("click", rateManga));
  document
    .querySelectorAll(".comment-button")
    .forEach((button) => button.addEventListener("click", addComment));
}

// Function to handle the like button click event
function likeManga(event) {
  const likeButton = event.target;
  likeButton.textContent = "Liked"; // Change button text to "Liked"
  likeButton.disabled = true; // Disable the button
}

// Function to handle the rate button click event
function rateManga(event) {
  const rating = prompt("Rate this manga from 1 to 5:");
  if (rating >= 1 && rating <= 5) {
    const ratingButton = event.target;
    ratingButton.textContent = `Rated: ${rating}/5`; // Update button text with the rating
    ratingButton.disabled = true; // Disable the button
  } else {
    alert("Please enter a valid rating between 1 and 5.");
  }
}

// Function to handle the comment button click event
function addComment(event) {
  const commentSection = event.target.closest(".comment-section");
  const commentInput = commentSection.querySelector(".comment-input");
  const commentsDiv = commentSection.querySelector(".comments");

  if (commentInput.value.trim()) {
    const comment = document.createElement("p");
    comment.textContent = commentInput.value;
    comment.classList.add("comment");
    commentsDiv.appendChild(comment); // Add the new comment to the comments div
    commentInput.value = ""; // Clear the input field
  }
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode"); // Toggle the dark-mode class on the body element
}
