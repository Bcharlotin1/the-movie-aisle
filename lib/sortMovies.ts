import { Movie } from "./types"

export const sortByRating = (movies: Movie[]) =>
  movies.toSorted((a, b) => b.vote_average - a.vote_average)
