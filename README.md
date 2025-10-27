# MovieHub

MovieHub is a JavaScript-based web application for discovering, searching, and saving information about movies. It provides an easy-to-use UI to browse popular titles, view details, and maintain favorites or watchlists.

## Features
- Search movies by title
- View movie details (overview, release date, rating, cast, trailers)
- Browse popular / trending movies
- Save movies to favorites or watchlist (local or persisted)
- Responsive UI for desktop and mobile

## Tech stack
- JavaScript (front-end framework/library — e.g., React, Vue, or plain JS)
- CSS (plain CSS or a framework like Tailwind/Bootstrap)
- HTML
- Optional: Node.js for local dev/build tasks
- External movie API (e.g., The Movie Database (TMDb) or OMDb)

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- An API key from your movie data provider (e.g., TMDb API key)

## API / Data model (example)
This app typically uses a 3rd-party movie API (TMDb) for data. Example endpoints the front-end might call:
- GET /search/movie?query={query} — search movies
- GET /movie/{id} — get movie details
- GET /movie/{id}/credits — get cast & crew
- GET /trending/movie/day — trending movies



