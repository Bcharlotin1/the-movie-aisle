import type React from "react"
import { getMovies } from "@/lib/movies"

const Home: React.FC = async () => {
  const movies = await getMovies()

  return (
    <main>
      <h1>The Movie Aisle</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default Home
