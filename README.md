# The Movie Aisle

A trip down the Blockbuster aisle: the most popular movies of 2002, sorted by rating, as a grid of VHS-style cards. Hover over (or tab to, or tap) a card to flip it over and read the back of the box.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS, using [TMDB](https://www.themoviedb.org/)'s `/discover/movie` endpoint.

## Setup

Requires **Node.js 20.9 or newer**.

1. Get a free TMDB API key: create an account at [themoviedb.org](https://www.themoviedb.org/), then go to **Settings → API** and copy the **API Key** (not the "API Read Access Token").
2. Create your env file and add the key:
   ```bash
   cp .env.example .env
   ```
   ```
   TMDB_API_KEY=your_key_here
   ```
3. Install and run:
   ```bash
   npm i && npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000).

`npm start` builds the app first (`next build && next start`), so the first run takes a moment. If the build stops with `Missing TMDB_API_KEY`, step 2 was skipped.

## Decisions

- **Filter: release year 2002** (`primary_release_year=2002`). The app's theme is a nostalgia trip to Blockbuster, and 2002 was my peak renting year.
- **Sort: rating, highest first, in my own code** (`toSorted` on `vote_average`) rather than TMDB's `sort_by`. It re-orders the 20 most popular 2002 movies, so obscure films with a single 10/10 vote don't take over the top.
- **Card: poster, title, rating, release date, and overview** on the back. These are the details people expect when browsing movies.
- **Interaction: a 3D flip on hover, keyboard focus or tap**, built with CSS only. Both sides are always in the HTML, so search engines can read the overview, and the cards ship no JavaScript.
- **Server-first:** the TMDB call runs on the server (`server-only`), so the API key never reaches the browser. With `"use cache"`, the page is pre-rendered at build time, so TMDB is called once rather than once per visitor.
- **SEO and performance:**
  - semantic HTML (`<header>`, `<article>`, one `<h1>`)
  - page title and description metadata
  - `next/image` for resized, lazy-loaded posters
  - the first row of posters loads eagerly to improve Largest Contentful Paint
  - fonts self-hosted with `next/font`
- **Styling: Tailwind**, with a responsive grid (2 → 5 columns).

## What I'd do next

- A detail page per movie (`/movies/[id]`): more pages for search engines to index.
- A sort dropdown and a year filter stored in the URL (`?year=2002`).
- Tests for `sortByRating`.
