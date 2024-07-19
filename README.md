# Comix

Comix is a web application that allows users to search, sort, and view a collection of manga (Japanese style comic books). Users can also interact with the manga items by liking, rating, and commenting on them. Additionally, the application supports a dark mode for better readability in low-light conditions.

# Features

- **Search Manga**: Users can search for manga by title.
- **Sort Manga**: Users can sort manga by title in ascending (A-Z) or descending (Z-A) order.
- **View All Manga**: Users can view the entire collection of manga.
- **Like Manga**: Users can like a manga item.
- **Rate Manga**: Users can rate a manga item from 1 to 5.
- **Comment on Manga**: Users can add comments to a manga item.
- **Dark/Light Mode**: Users can toggle between dark and light modes for better readability.

# Project Structure

## `index.html`

Has the basic structure of the webpage, including the header, main content area, and footer. It also links to the CSS and JavaScript files.

## `styles.css`

Contains styles for the webpage, including the body, header, footer, main content area, and manga items. It also includes styles for dark mode.

## `app.js`

Contains the functionality for the webpage, including event listeners and functions for searching, sorting, liking, rating, and commenting on manga items. It also includes the dark mode toggle functionality.

## `db.json`

Contains the data for the manga collection. Each manga item includes the following attributes:

- `id`: A unique identifier for the manga.
- `title`: The title of the manga.
- `author`: The author of the manga.
- `description`: A brief description of the manga.
- `poster`: The path of the poster image for the manga.

# API

The application fetches manga data from a local server at http://localhost:3000/manga. Ensure your local server is set up and running correctly to return the appropriate manga data in JSON format.

# Usage

- Search for Manga: Enter a search query in the input field and click the "Search" button.
- Sort Manga: Select a sort order from the dropdown menu (Default, A-Z, Z-A) then click show all.
- View All Manga: Click the "Show All" button to view the entire manga collection.
- Clear all manga: Click the "Clear All" button to clear all manga displayed.
- Like a Manga: Click the "Like" button on a manga item to like it.
- Rate a Manga: Click the "Rate" button on a manga item to rate it from 1 to 5.
- Comment on a Manga: Enter a comment in the input field and click the "Comment" button to add a comment.
- Toggle Dark/Light Mode: Click the "Dark/Light Mode" button to switch between dark and light modes.

# Setup

1.  Clone the repository to your local machine.

2.  Navigate to the project directory.

3.  Open index.html in your preferred web browser.

4.  Ensure your local server is set up and running correctly to return the appropriate manga data in JSON format from db.json. You can use json-server to serve the db.json file:
    npm install -g json-server

    json-server --watch db.json

5.  Access the server at http://localhost:3000/manga
6.  Access the web app at: http://localhost:5500 or: https://koryrkoryr.github.io/Comix-project/
