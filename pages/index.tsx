import { useState } from 'react'
import Link from 'next/link'
import type { NextPage, GetStaticProps } from 'next'
import { useFetchMovies, basicFetch  } from '../api'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, THUMB_SIZE, movieUrl, genreUrl, POPULAR_BASE_URL, GENRE_BASE_URL } from '../config'
import useLongPress from '../utils/useLongPress'
// components
import { Hero, Grid, Card, Carousel } from '../components'
import { Featured, PopularMovie, Genre, Movie, MovieRelativeToGenre, GenreResponse, Movies } from '../types/Movie'

type HomeProps = {
  featuredMovie: Featured
  // popularMovies: PopularMovie[]
  actionGenre: PopularMovie[]
  genres: Genre[]
}

// type predicates
function isTouchEvent(e: React.TouchEvent | React.MouseEvent):e is React.TouchEvent
  { return e && 'touches' in e; }

function isMouseEvent(e: React.TouchEvent | React.MouseEvent): e is React.MouseEvent
  { return e && 'screenX' in e; }

// const SliderProps = {
//   zoomFactor: 8, // How much the image should zoom on hover in percent
//   slideMargin: 0.5, // <--remove?>
//   maxVisibleSlides: 5,
//   pageTransition: 1500 // Transition when flipping pages
// };

const CarouselProps = {
  maxVisibleSlides: 7,
  infiniteLoop: false,
}

const Home: NextPage<HomeProps> = ({ featuredMovie, actionGenre, genres }) => {
  const [query, setQuery] = useState('')
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);

  const onLongPress = useLongPress();
  const buttons = ['button one', 'button two', 'button three'];
  
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  // Save touch start position to state touchPosition
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if(isTouchEvent(e)) {
      console.log("GROW: ", e.touches[0].clientX);
      // const touchDown = e.touches[0].clientX
      // setTouchPosition(touchDown)
    }
    if(isMouseEvent(e)) {
      console.log(e.screenX);     
    }
  }


  // const [genreSlideData, setGenreSlideData] = useState<PopularMovie[]>([])
  
  // const handleTouchEvent = (e: TouchEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   // Do something
  // };
  // onTouchStart={handleTouchEvent}

  // document.addEventListener("touchstart", () => {}, true);

//   element:hover,
//   element:active {
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//   -webkit-user-select: none;
//   -webkit-touch-callout: none;
// }
// -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

// document.querySelector("#__next > div.relative.h-screen.lock-screen > div.w-full.flex.flex-col > div > div > div > div:nth-child(4) > img")

  return (
    <div
      className='relative h-screen lock-screen'
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


      <div className='relative text-white p-8 flex gap-4 w-full '>
        {buttons.map(text => (
          <button
            className='px-8 py-4 border-spacing-1 text-cyan-400 hover:text-cyan-300 border-2 border-cyan-400 bg-brand-900 hover:neon-shadow-soft'
            onClick={() => console.log('click still working for ' + text)}
            {...onLongPress(() => console.log('long press worked for ' + text))}
          >
            {text}
          </button>
        ))}
      </div>

        <Carousel {...CarouselProps} title='Action Movies'> 
        {actionGenre.map((actionMovie) => (
          <Link key={actionMovie.id} href={`/movies/${actionMovie.id}`}>
            {/*  cursor-pointer duration-200 hover:scale-110 */}
            <div className="flex items-center justify-center">
              <img
                src={actionMovie.posterPath
                  ? IMAGE_BASE_URL + THUMB_SIZE + actionMovie.posterPath : '/images/baby-yoda-md.png'}
                alt='character'
                className='rounded-md bg-brand-900 cursor-pointer duration-200 hover:scale-110'
                onTouchStart={handleTouchStart}
              />
            </div>
          </Link>
        ))}
      </Carousel>

      {/* <WildSlider {...SliderProps}>
      {actionGenre.map((actionMovie) => {
        return (
          <Link key={actionMovie.id} href={`/movies/${actionMovie.id}`}>
          <div key={actionMovie.id}>
            <img
              src={actionMovie.posterPath
                ? IMAGE_BASE_URL + THUMB_SIZE + actionMovie.posterPath : '/images/baby-yoda-md.png'}
              alt='character'
            />
          </div>
          </Link>
        )}
      )}
      </WildSlider> */}

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
