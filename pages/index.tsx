import { useState } from 'react'
import Link from 'next/link'
import type { NextPage, GetStaticProps } from 'next'
import { useFetchMovies } from '../api/fetchHooks'
import { basicFetch } from '../api/fetchFunctions'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, THUMB_SIZE, movieUrl, POPULAR_BASE_URL } from '../config'
// components
import { Hero, Grid, Card, Spinner } from '../components'
import { Featured, PopularMovie, Genre, Movie } from '../types/Movie'

type HomeProps = {
  featuredMovie: Featured
  popularMovies: PopularMovie[]
  topRatedMovies: PopularMovie[]
  genres: Genre[]
}

const Home: NextPage<HomeProps> = ({ featuredMovie, popularMovies, topRatedMovies, genres }) => {
  const [query, setQuery] = useState('')
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);
  
  return (
    <div
      className='relative h-screen'
      // onScroll={handleScroll}
    >
      {data && data.pages ? (
        <Hero
          imgUrl={featuredMovie.backdropPath
            ? IMAGE_BASE_URL + BACKDROP_SIZE + featuredMovie.backdropPath
            : "/images/baby-yoda-md.png"}
          title={featuredMovie.title}
          text={featuredMovie.overview}
          tagline={featuredMovie.tagline}
          releaseDate={featuredMovie.releaseDate}
          id={featuredMovie.id}
          rating={featuredMovie.rating}
        />
      ) : null}

      <Grid
        // className='px-4 pb-8 pt-24 max-w-7xl m-auto bg-yellow-300 z-50'
        title={'Popular Movies'}
      >
        {/* nested array loop */}
        {data && data.pages
          ? data.pages.map(page =>
              page.results.map(movie => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                  <div className='cursor-pointer '>
                    <Card
                      imgUrl={movie.poster_path
                        ? IMAGE_BASE_URL + THUMB_SIZE + movie.poster_path : '/images/baby-yoda-md.png'}
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
      </Grid>
      {/* {isLoading || isFetching ? <Spinner /> : null} */}
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  // TODO:  Create array of featuredMovies to generate at random
  //        453395, 299537, 181808, 181812, 122, 78, 264660

  // Featured Movie
  const movieEndpoint: string = movieUrl('453395');
  const movieResp = await basicFetch<Movie>(movieEndpoint);

  const featuredMovie = {
    id: movieResp.id,
    backdropPath: movieResp.backdrop_path,
    // backdropPath: movieResp.poster_path,
    title: movieResp.title,
    overview: movieResp.overview,
    tagline: movieResp.tagline,
    releaseDate: movieResp.release_date,
    rating: movieResp.vote_average
  }

  // TODO: Popular Movies
  // const getPopularMovies: string = movieUrl(id)
  // TODO: Top Rated Movies
  // TODO: Movies by Genre List

  return {
    props: {
      featuredMovie,
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};
