import { useState } from 'react'
import type { NextPage } from 'next'
import { useFetchMovies } from '../api/fetchHooks'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
import { Header, Hero, Grid, Card, Spinner } from '../components'

const Home: NextPage = () => {
  const [query, setQuery] = useState('')
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);

  console.log(data);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <main className='relative h-screen overflow-y-scroll'>
      <Header setQuery={setQuery}/>
      {!query && data && data.pages ? (
        <Hero
          imgUrl={data?.pages[0].results[0]?.backdrop_path
          ? IMAGE_BASE_URL + BACKDROP_SIZE + data.pages[0].results[0].backdrop_path
          : "/images/no_image.jpg"}
          title={data?.pages[0].results[0].title}
          text={data?.pages[0].results[0].overview}
        />
      ) : null}

      {/* <Grid /> */}
      {/* <Card /> */}
      <Spinner />
    </main>
  )
}

export default Home
