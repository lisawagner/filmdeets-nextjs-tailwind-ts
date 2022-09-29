
import { useRouter } from 'next/router';
import { useFetchMovies } from '../../../api/fetchHooks'
import { IMAGE_BASE_URL, THUMB_SIZE } from '../../../config'
import { GridCard, GridContainer, Spinner } from '../../../components'
import { useEffect, useState } from 'react';


const Search = () => {
  const [query, setQuery] = useState<any | null>(null)
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);

  const router = useRouter()
  const id = router.query.name

  useEffect(() => {
    // may need this for initial render
    if (router.isReady) {
      setQuery(id)
    }
  }, [router.isReady, id])

  return (
    <div className='pt-16 text-white'>
      <GridContainer title={`Search Results: ${data?.pages[0].total_results}`}>
        {data && data.pages
            ? data.pages.map(page =>
                page.results.map(movie => (
                  <GridCard
                    key={movie.id}
                    itemId={movie.id}
                    imgUrl={movie.poster_path
                      ? IMAGE_BASE_URL + THUMB_SIZE + movie.poster_path : '/images/baby-yoda-md.png'}
                    title={movie.original_title}
                    subtitle={movie.tagline}
                    routeUrl={''}
                  />
                ))
              )
            : null}
      </GridContainer>
    </div>
  )
}
export default Search