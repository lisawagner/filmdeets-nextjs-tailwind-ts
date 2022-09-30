import { useInfiniteQuery } from '@tanstack/react-query'
// Fetch function
import { searchMovies, getGenres } from './fetchFunctions'
// Types
import { Movies } from '../types/Movie'

export const useFetchMovies = (search: string) => {
  // fetches first movie page initially, then more as pageParam increments
  return useInfiniteQuery(
    ['movies', search],
    ({ pageParam = 1 }) => searchMovies(search, pageParam), {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1
        }

        return undefined
      },
      // Don't refetch the data each time the user leaves the window!
      refetchOnWindowFocus: false
    }
  )
}

export const useFetchGenres = (genre: string) => {
  // fetches first movie page initially, then more as pageParam increments
  return useInfiniteQuery(
    ['movies', genre],
    ({ pageParam = 1 }) => getGenres(genre, pageParam), {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1
        }

        return undefined
      },
      // Don't refetch the data each time the user leaves the window!
      refetchOnWindowFocus: false
    }
  )
}