export type Movie = {
  id: number
  title: string
  poster_path: string | null
  overview: string
  release_date: string
  vote_average: number
}

export type DiscoverMovieResponse = {
  results: Movie[]
}
