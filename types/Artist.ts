export type ArtistResponse = {
  page: number
  results: Artist[]
  total_pages: number
  total_results: number
}

export type Artist = {
  adult: boolean
  gender: number

  id: number
  known_for: KnownFor[]
  known_for_department: string
  
  name: string
  popularity: number
  profile_path?: string

  biography: string
}

export type KnownFor = {
  adult?: boolean
  backdrop_path: string
  first_air_date?: string

  genre_ids: number[]
  id: number

  media_type: string
  name?: string

  origin_country?: string[]
  original_language: string
  original_name?: string
  original_title?: string
  overview: string

  poster_path: string
  release_date?: string
  title?: string

  video?: boolean
  vote_average: number
  vote_count: number  
}

export type ArtistDetail = {
  adult: boolean
  also_known_as: string[]
  biography: string
  // birthday: Date
  // deathday: null
  // gender: number
  // homepage: null
  id: number
  // imdb_id: string
  // known_for_department: string
  name: string
  // place_of_birth: string
  popularity: number
  profile_path: string
  // social_media?: TSocialMedia
  cast?: TCast[]
  crew?: TCast[]
}

// export type TSocialMedia = {
//   id: number
//   imdb_id: string
//   facebook_id?: string
//   instagram_id?: string
//   twitter_id?: string
//   freebase_mid?: string
//   freebase_id?: string
//   tvdb_id?: number
//   tvrage_id?: number
// }

export type TCast = {
  adult: boolean
  // gender: number
  id: number
  // known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: null | string
  cast_id?: number
  character?: string
  credit_id: string
  order?: number
  // department?: string
  job?: string
  overview: string
  release_date?: Date
  backdrop_path: null | string
  genre_ids: number[]
  vote_count: number
  // original_language: 'en'
  original_title?: string
  poster_path: null | string
  title?: string
  video?: boolean
  vote_average: number
  // media_type: 'movie' | 'tv'
  first_air_date?: Date;
  // origin_country?: string[]
  episode_count?: number
  release_year?: number | ''
}