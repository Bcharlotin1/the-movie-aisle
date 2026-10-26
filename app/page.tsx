import type React from "react"
import { getMovies } from "@/lib/movies"
import { sortByRating } from "@/lib/sortMovies"

const HomePage: React.FC = async () => {
  const movies = sortByRating(await getMovies())

  return (
    <main>
      <h1>The Movie Aisle</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}: {movie.vote_average}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default HomePage
