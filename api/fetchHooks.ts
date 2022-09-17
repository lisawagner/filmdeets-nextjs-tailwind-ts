import { useInfiniteQuery } from '@tanstack/react-query';
// Fetch function
import { fetchMovies } from './fetchFunctions';
// Types
import { Movies } from '../types/Movie';
// import { movieUrl } from '../config';

export const useFetchMovies = (search: string) => {
  // fetches first movie page initially, then more as pageParam increments
  return useInfiniteQuery(['movies', search], ({ pageParam = 1 }) => fetchMovies(search, pageParam), {
    getNextPageParam: (lastPage: Movies) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
    // Don't refetch the data each time the user leaves the window!
    refetchOnWindowFocus: false
    
  });
};

// export const staticMovie = (id: string) => {
//   return movieUrl(id)
// }