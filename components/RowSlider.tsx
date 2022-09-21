import Link from 'next/link'
import { useRef } from 'react'
import { PopularMovie } from '../types/Movie';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, THUMB_SIZE, movieUrl, genreUrl, POPULAR_BASE_URL, GENRE_BASE_URL } from '../config'
import Card from './Card';

enum Directions {
  Left = 'left',
  Right = 'right',
}

type SliderProps = {
  genreData: PopularMovie[]
}

const RowSlider = ({ genreData }: SliderProps) => {
  const itemsRef = useRef<HTMLDivElement>(null)

  function scrollTo(direction: string) {
    const containerWidth = itemsRef.current!.offsetWidth

    switch (direction) {
      case Directions.Right:
        itemsRef.current!.scrollLeft += containerWidth / 1.5
        break
      case Directions.Left:
        itemsRef.current!.scrollLeft -= containerWidth / 1.5
        break
      default:
        break
    }
  }

  function scrollLeft() {
    scrollTo(Directions.Left)
  }

  function scrollRight() {
    scrollTo(Directions.Right)
  }

  // console.log("Genre Data: ", genreData);
  
  return (
    <>
    <div className='py-8 bg-black w-full h-full z-20'>
      <h1 className='text-white'>Title to Pass In?</h1>
      <div className='relative block box-border bg-slate-500'>
        <button onClick={scrollLeft} className='absolute flex items-center justify-center w-16 h-16 inset-y-1/2 border z-50 rounded text-cyan-400 border-cyan-300 py-2 px-5 hover:text-cyan-300 hover:neon-shadow duration-200'>L</button>
        <button onClick={scrollRight} className='absolute flex items-center justify-center w-16 h-16 inset-y-1/2 right-0 z-50 border rounded text-cyan-400 border-cyan-300 py-2 px-5 hover:text-cyan-300 hover:neon-shadow duration-200'>R</button>
        <div ref={itemsRef} className='flex overflow-x-scroll scroll-smooth scroll-row-transition'>
          {genreData.map((movie) => (

            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <div className='cursor-pointer w-full h-full'>
                <Card
                  imgUrl={movie.posterPath
                    ? IMAGE_BASE_URL + THUMB_SIZE + movie.posterPath : '/images/baby-yoda-md.png'}
                  title={movie.title}
                />
              </div>
            </Link>             

          ))}
        </div>
      </div>
    </div>    
    </>
  )
}
export default RowSlider

  /* <Link key={movie.id} href={`/movies/${movie.id}`}>
    <div className='cursor-pointer'>
      <Card
        imgUrl={movie.posterPath
          ? IMAGE_BASE_URL + THUMB_SIZE + movie.posterPath : '/images/baby-yoda-md.png'}
        title={movie.title}
      />
    </div>
  </Link> */