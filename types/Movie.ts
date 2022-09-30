// MovieResponse
export type Movies = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
};

export type SelectMovie = {
  id: number
  posterPath: string
  backdropPath: string
  title: string
  releaseDate: string
  rating: number
  synopsis: string
  genres: Genre[]
}

export type Movie = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number

  genres: Genre[]
  genre_ids: number[]
  id: number

  // original_language: string
  original_title: string
  overview: string

  popularity: number
  poster_path: string

  // first_air_date: string
  release_date: string
  revenue: number
  runtime: number

  tagline: string
  title: string;

  video: boolean
  vote_average: number
  vote_count: number
};

export type Credits = {
  id: number
  cast: Cast[]
  crew: Crew[]
};

export type Cast = {
  id: number
  character: string
  credit_id: string
  name: string
  profile_path: string
};

export type Crew = {
  id: number
  job: string
  name: string
  credit_id: number
};

export type GenreResponse = {
  genres: Genre[]
}

export type Genre = {
  id: number
  name: string
}

export type Featured = {
  id: number
  backdropPath: string
  overview: string
  tagline: string
  title: string
  releaseDate: string
  rating: number
}
