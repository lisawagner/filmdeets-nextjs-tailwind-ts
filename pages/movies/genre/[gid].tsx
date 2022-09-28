import { useState, useEffect } from 'react'
import { useFetchGenres, basicFetch } from '../../../api';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router'
import { GridCard, GridContainer } from '../../../components';
import { IMAGE_BASE_URL, THUMB_SIZE, GENRE_BASE_URL } from '../../../config'
import { GenreResponse, Genre } from '../../../types/Movie';

type TProps = {
  genres: Genre[]
}

const MoviesByGenre: NextPage<TProps> = ({ genres }) => {
  const [query, setQuery] = useState<any | null>(null)
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchGenres(query);
  const [title, setTitle] = useState('')

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
  
  return (
    <div className='pt-10'>
      <GridContainer title={`GENRE | ${title}`}>
        {data && data.pages
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
      
    </div>
  )
}
export default MoviesByGenre

export const getStaticProps: GetStaticProps = async (gid) => {

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