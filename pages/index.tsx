import { useState } from 'react'
import Link from 'next/link'
import type { NextPage, GetStaticProps } from 'next'
import { useFetchMovies, staticMovie } from '../api/fetchHooks'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, movieUrl } from '../config'
// components
import { Header, Hero, Grid, Card, Spinner } from '../components'
import { Featured, PopularMovie, Genre, MovieDetails } from '../types/Movie'
import { featureData} from './api/feature'

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


  console.log(data);

  // const feature = movieUrl('299536')
  // console.log("FEATURE:", feature);

  // const yesss = featureData('299536')
  // console.log('YES! ', yesss);
  

  return (
    <main
      className='relative h-screen'
      // onScroll={handleScroll}
    >
      <Header setQuery={setQuery}/>
      {/* if this isn't a search, show the hero, else don't show hero */}
      {!query && data && data.pages ? (
        <Hero
          imgUrl={data?.pages[0].results[2]?.backdrop_path
          ? IMAGE_BASE_URL + BACKDROP_SIZE + data.pages[0].results[2].backdrop_path
          : "/images/no_image.jpg"}
          title={data?.pages[0].results[2].title}
          text={data?.pages[0].results[2].overview}
      />
      ) : null}
      {/* id = 616037 */}
      {/* {!query && data && data.pages ? (
        <Hero
         imgURL={data.pages}
        />
      ) : null} */}

      <Grid
        className='p-4 max-w-7xl m-auto'
        title={query ? `Search Results: ${data?.pages[0].total_results}` : 'Popular Movies' }
      >
        {/* nested array loop */}
        {data && data.pages
          ? data.pages.map(page =>
              page.results.map(movie => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <div className='cursor-pointer hover:opacity-80 duration-300'>
                    <Card
                      imgUrl={movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : '/images/baby-yoda-md.png'}
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
      </Grid>
      {/* {isLoading || isFetching ? <Spinner /> : null} */}
    </main>
  )
}


// export const getStaticProps: GetStaticProps = async () => {
  // const featuredMovieResponse = await api.get<MovieDetails>('/movie/299536')
//   const featuredMovieResponse = await movieUrl('/movie/299536')

//   const featuredMovie = {
//     id: featuredMovieResponse.id,
//     backdropPath: featuredMovieResponse.data.backdrop_path,
//     title:
//       featuredMovieResponse.data.title ||
//       featuredMovieResponse.data.original_title,
//     genres: featuredMovieResponse.data.genres,
//     overview: featuredMovieResponse.data.overview,
//     tagline: featuredMovieResponse.data.tagline || 'No tagline',
//   }

//   return {
//     props: { featuredMovie }
//   }
// }

export default Home
