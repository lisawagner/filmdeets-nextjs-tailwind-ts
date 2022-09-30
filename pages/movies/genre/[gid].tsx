import { useState, useEffect } from 'react'
import { useFetchGenres, basicFetch } from '../../../api'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { GridCard, GridContainer } from '../../../components'
import { IMAGE_BASE_URL, THUMB_SIZE, GENRE_BASE_URL } from '../../../config'
import { GenreResponse, Genre } from '../../../types/Movie'
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver'

type TProps = {
  genres: Genre[]
}

const MoviesByGenre: NextPage<TProps> = ({ genres }) => {
  const [title, setTitle] = useState('')
  const [query, setQuery] = useState<any | null>(null)
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isSuccess, isLoading } = useFetchGenres(query);
  
  // Is user intersecting w/ end of Page? If so, then fetch next page
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    isIntersecting && fetchNextPage()
  }

  // set an intercept target to observe
  const { setTarget } = useIntersectionObserver({
    onIntersect,
    enabled: !!hasNextPage,
  })

  const router = useRouter()
  const { gid } = router.query

  useEffect(() => {
    // may need this for initial render
    if (router.isReady) {
      setQuery(gid)
    }
  }, [router.isReady, gid])

  useEffect(() => {
    const isFound = genres.some(genre => {
      if(genre.id.toString() === gid) {
        return setTitle(genre.name)
      }
    })
  }, [genres, gid])

  console.log("Genre Data: ", data);
  
  
  return (
    <div className='pt-10'>
      <GridContainer title={`GENRE | ${title}`}>
        {isSuccess && data && data.pages
          ? data.pages.map(page => 
            page.results.map(movie => (
              <GridCard
                key={movie.id}
                itemId={movie.id}
                imgUrl={movie.poster_path
                ? IMAGE_BASE_URL + THUMB_SIZE + movie.poster_path : '/images/baby-yoda-md.png'}
                title={movie.original_title}
                subtitle={movie.belongs_to_collection}
                routeUrl={''}
              />
            )))
        : null}
      </GridContainer>
      <div ref={setTarget}>{isFetchingNextPage ? "Loading more..." : ""}</div>
      {isLoading && <div className='text-cyan-400 flex items-center justify-center my-11'>Loading ! ❤️</div>}
      {!hasNextPage && !isLoading && (
        <div className='text-cyan-400 flex justify-center items-center my-11 mx-auto'>
          Congrats! You scrolled to the end of {title}. You rock! 🤘
        </div>
      )}
    </div>
  )
}
export default MoviesByGenre

export const getStaticProps: GetStaticProps = async () => {

  const genreList = await basicFetch<GenreResponse>(GENRE_BASE_URL)
  const genres = genreList.genres // <- gets genre list

  return {
    props: {
      genres
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};