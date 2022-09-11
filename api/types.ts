export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
  release_date: string;
};

// MovieResponse
export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

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

export type Cast = {
  character: string;
  credit_id: string;
  name: string;
  profile_path: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};