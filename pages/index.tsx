import type { NextPage } from 'next'
import { Hero, Grid, Card, Spinner } from '../components'

const Home: NextPage = () => {
  return (
    <main className='relative h-screen overflow-y-scroll'>
      <Hero />
      <Grid />
      <Card />
      <Spinner />
    </main>
  )
}

export default Home
