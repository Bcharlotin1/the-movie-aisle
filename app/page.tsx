import { getMovies } from "@/lib/movies"

const Home = async () => {
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
