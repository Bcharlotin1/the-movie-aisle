import type React from "react"
import { getMovies } from "@/lib/movies"
import { sortByRating } from "@/lib/sortMovies"

import MovieCard from "@/components/MovieCard"

const HomePage: React.FC = async () => {
  const movies = sortByRating(await getMovies())

  return (
    <main>
      <h1>The Movie Aisle</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
