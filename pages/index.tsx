import { useState } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import { useFetchMovies } from '../api/fetchHooks'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
// components
import { Header, Hero, Grid, Card, Spinner } from '../components'

const Home: NextPage = () => {
  const [query, setQuery] = useState('')
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);

  console.log(data);

  return (
    <main
      className='relative h-screen'
      // onScroll={handleScroll}
    >
      <Header setQuery={setQuery}/>

      {!query && data && data.pages ? (
        // consider hardcode assets for better film imgs for hero
        <Hero
          imgUrl={data?.pages[0].results[1]?.backdrop_path
          ? IMAGE_BASE_URL + BACKDROP_SIZE + data.pages[0].results[1].backdrop_path
          : "/images/no_image.jpg"}
          title={data?.pages[0].results[1].title}
          text={data?.pages[0].results[1].overview}
        />
      ) : null}

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

export default Home
