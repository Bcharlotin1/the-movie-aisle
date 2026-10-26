import "server-only"
import type { DiscoverMovieResponse } from "./types"

export const getMovies = async () => {
  "use cache"

  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey)
    throw new Error(
      "Missing TMDB_API_KEY. Copy .env.example to .env and add your key.",
    )

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=1&primary_release_year=2002`

  const response = await fetch(url)
  if (!response.ok)
    throw new Error(`TMDB request failed with status ${response.status}`)

  const data = (await response.json()) as DiscoverMovieResponse
  return data.results
}
