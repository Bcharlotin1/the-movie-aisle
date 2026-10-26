import type React from "react"

import { getMovies } from "@/lib/movies"
import { sortByRating } from "@/lib/sortMovies"

import MovieCard from "@/components/MovieCard"

const HomePage: React.FC = async () => {
  const movies = sortByRating(await getMovies())

  return (
    <main>
      <header className="bg-blue-900 px-6 py-4 text-center">
        <h1 className="font-display text-4xl text-yellow-400 uppercase">
          The Movie Aisle
        </h1>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} eager={index < 5} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
