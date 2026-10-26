import type React from "react"
import Image from "next/image"
import { Movie } from "@/lib/types"

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
  <article>
    {movie.poster_path ? (
      <Image
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={`${movie.title} poster`}
        width={342}
        height={513}
      />
    ) : (
      <div>No poster</div>
    )}
    <h2>{movie.title}</h2>
    <p>{movie.vote_average.toFixed(1)}</p>
    <p>{movie.release_date}</p>
  </article>
)

export default MovieCard
