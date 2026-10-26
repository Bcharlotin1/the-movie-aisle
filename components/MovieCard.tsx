"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import type { Movie } from "@/lib/types"

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <article className="relative perspective-distant">
      <div
        className={`relative transform-3d transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`}
      >
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
          <h2>{movie.title}</h2>
          <p>{movie.vote_average.toFixed(1)}</p>
          <p>{movie.release_date}</p>
        </div>
        <div className="absolute inset-0 overflow-hidden p-4 rotate-y-180 backface-hidden">
          <p>{movie.overview || "No description available."}</p>
        </div>
      </div>

      <button
        className="absolute inset-0 cursor-pointer"
        aria-label={`Flip card for ${movie.title}`}
        aria-pressed={isFlipped}
        onClick={() => setIsFlipped(!isFlipped)}
      />
    </article>
  )
}

export default MovieCard
