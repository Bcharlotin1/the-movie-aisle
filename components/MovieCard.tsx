import type React from "react"

import Image from "next/image"

import type { Movie } from "@/lib/types"

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
  <article className="font-card group perspective-distant" tabIndex={0}>
    <div className="relative transform-3d transition-transform duration-500 group-hover:rotate-y-180 group-focus:rotate-y-180">
      <div className="backface-hidden">
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
        <div className="text-center">
          <h2 className="font-semibold">{movie.title}</h2>
          <p className="font-light">{movie.vote_average.toFixed(1)}</p>
          <p className="font-light">{movie.release_date}</p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden p-4 rotate-y-180 backface-hidden">
        <p className="font-light">
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  </article>
)

export default MovieCard
