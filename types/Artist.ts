export type ArtistResponse = {
  page: number
  results: Artist[]
  total_pages: number
  total_results: number
}

export type Artist = {
  biography: string
  id: number
  known_for: KnownFor[]
  known_for_department: string
  name: string
  profile_path?: string
}

export type KnownFor = {
  backdrop_path: string
  genre_ids: number[]
  id: number

  media_type: string
  name?: string

  original_name?: string
  original_title?: string
  overview: string

  poster_path: string
  release_date?: string
  title?: string

  vote_average: number
  vote_count: number  
}

export type ArtistDetail = {
  also_known_as: string[]
  biography: string
  id: number

  name: string
  popularity: number
  profile_path: string
  
  cast?: TCast[]
  crew?: TCast[]
}

export type TCast = {
  backdrop_path: null | string
  genre_ids: number[]
  id: number

  overview: string
  original_title?: string
  poster_path: null | string

  release_date?: Date
  title?: string

  vote_count: number
  vote_average: number

}