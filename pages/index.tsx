import { useState } from 'react'
import Link from 'next/link'
import type { NextPage, GetStaticProps } from 'next'
import { useFetchMovies, basicFetch  } from '../api'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, THUMB_SIZE, movieUrl, genreUrl, POPULAR_BASE_URL, GENRE_BASE_URL } from '../config'
// components
import { Hero, Grid, Card, Spinner, Carousel, Gallery, BigSlider, WildSlider } from '../components'
import { Featured, PopularMovie, Genre, Movie, MovieRelativeToGenre, GenreResponse, Movies } from '../types/Movie'
import { Character } from '../types/Character'

type HomeProps = {
  featuredMovie: Featured
  // popularMovies: PopularMovie[]
  actionGenre: PopularMovie[]
  genres: Genre[]
}

// const SLIDE_COUNT = 3;
// const slides = Array.from(Array(SLIDE_COUNT).keys());

const SliderProps = {
  zoomFactor: 20, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 5,
  pageTransition: 500 // Transition when flipping pages
};

const Home: NextPage<HomeProps> = ({ featuredMovie, actionGenre, genres }) => {
  const [query, setQuery] = useState('')
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);

  const [slideData, setSlideData] = useState<Character[]>([]);
  
  
  
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

      {/* <Gallery /> */}
      {/* <BigSlider slides={slides} /> */}

      <Grid
        // className='px-4 pb-8 pt-24 max-w-7xl m-auto bg-yellow-300 z-50'
        title={'Popular Movies'}
      >
        {/* nested array loop */}
        {data && data.pages
          ? data.pages.map(page =>
              page.results.map(movie => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                  <div className='cursor-pointer'>
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
      {/* <Carousel /> */}

      <Grid title={'Action Movies'}>
        {actionGenre.map((actionMovie) => {
          return (
            <Link key={actionMovie.id} href={`/movies/${actionMovie.id}`}>
              <div className='cursor-pointer'>
                <Card
                  imgUrl={actionMovie.posterPath
                    ? IMAGE_BASE_URL + THUMB_SIZE + actionMovie.posterPath : '/images/baby-yoda-md.png'}
                  title={actionMovie.title}
                />
              </div>
            </Link>
          )
        })}
      </Grid>

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
  const genreList = await basicFetch<GenreResponse>(GENRE_BASE_URL)
  const genres = genreList.genres // <- gets genre list
  // console.log("Genres: ", genres); 
  
  // Action Genre
  const actionGenreEndpoint: string = genreUrl('28')
  const actionGenreResp = await basicFetch<Movies>(actionGenreEndpoint)
  // console.log("Action Genre: ", actionGenreResp);

  const actionGenre = actionGenreResp.results.map(
    (actionMovie) => {
      return {
        id: actionMovie.id,
        posterPath: actionMovie.poster_path,
        title: actionMovie.title || actionMovie.original_title,
        rating: actionMovie.vote_average
      }
    }
  )
  
  return {
    props: {
      featuredMovie,
      actionGenre,
      genres
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};
