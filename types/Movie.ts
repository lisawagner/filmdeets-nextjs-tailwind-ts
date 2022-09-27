// MovieResponse
export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: boolean // new
  backdrop_path: string;
  belongs_to_collection: any
  budget: number;

  genres: Genre[]
  genre_ids: number[] // new
  id: number;

  original_language: string // new
  original_title: string;
  overview: string;

  popularity: number;
  poster_path: string;

  first_air_date: string
  release_date: string
  revenue: number
  runtime: number

  tagline: string
  title: string;

  video: boolean // new
  vote_average: number
  vote_count: number
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

export type Credits = {
  id: number
  cast: Cast[]
  crew: Crew[]
};

export type GenreResponse = {
  genres: Genre[]
}

export type Genre = {
  id: number
  name: string
}

export type ProductionCompany = {
  id: number
  logo_path: any
  name: string
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

export type SpokenLanguage = {
  english_name: string
  iso_639_1: string
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

export type PopularMovie = {
  id: number
  posterPath: string
  backdropPath: string
  title: string
  releaseDate: string
  rating: number
  synopsis: string
  genres: Genre[]
}

export type MovieRelativeToGenre = {
  name: string
  data: Movie[]
}

// Movie Details - consider moving to it's own ts file (is this needed?)
// export type MovieDetails = {
//   adult: boolean
//   backdrop_path: string
//   belongs_to_collection: any
//   budget: number
//   genres: Genre[]

//   homepage: string
//   id: number
//   imdb_id: string

//   original_language: string
//   original_title: string
//   overview: string

//   popularity: number
//   poster_path: string
//   production_companies: ProductionCompany[]
//   production_countries: ProductionCountry[]

//   release_date: string
//   revenue: number
//   runtime: number

//   spoken_languages: SpokenLanguage[]
//   status: string

//   tagline: string
//   title: string

//   video: boolean
//   vote_average: number
//   vote_count: number
// }