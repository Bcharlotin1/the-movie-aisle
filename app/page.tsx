import type React from "react"

import { getMovies } from "@/lib/movies"
import { sortByRating } from "@/lib/sortMovies"

import MovieCard from "@/components/MovieCard"

const HomePage: React.FC = async () => {
  const movies = sortByRating(await getMovies())

  return (
    <main>
      <header className="bg-blue-900 px-6 py-4 text-center">
        <h1 className={`font-display text-4xl text-yellow-400 uppercase`}>
          The Movie Aisle
        </h1>
      </header>

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
