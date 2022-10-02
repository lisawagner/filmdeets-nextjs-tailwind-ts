import Image from 'next/image'
// Helpers
import { calcTime, convertMoney } from '../../utils/helpers'
// Components
import Pill from './Pill'
// Types
import { Crew, Genre } from '../../types/Movie'

type TProps = {
  backgroundImgUrl: string
  title: string
  tagline?: string
  year: string
  summary: string
  rating: number
  directors: Crew[]
  time: number
  budget: number
  revenue: number
  genres?: Genre[]
};

const MovieDetails = ({
  backgroundImgUrl,
  genres,
  title,
  tagline,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue
}: TProps) => {

  return (
    <div className='relative animate-fadeIn'>
      <Image
        priority={true}
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={backgroundImgUrl}
        alt='movie poster background'
        className='absolute inset-0 w-full h-full object-cover -z-10'
      />
      <div className='absolute top-0 inset-0 bg-brand-900 bg-opacity-40'></div>
      <div className='absolute top-0 inset-0 bg-gradient-to-r from-[#010404] via-transparent to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-t from-[#010404] via-transparent to-transparent'></div>

      <div className='relative w-full pt-80 pb-64 px-4 md:px-8'>

        {tagline && <span className='text-white md:text-2xl md:max-w-[70%] xl:text-3xl italic text-shadow-md'>
        &quot;{tagline}&quot;
        </span>}
        
        <h2 className='text-cyan-400 text-4xl md:text-5xl md:max-w-[70%] xl:text-6xl font-bold text-shadow-md uppercase tracking-wide my-3'>
          {title}
        </h2>

        <div className='text-gray-300 mt-2 text-sm'>
          <span>{!year ? 'No Release Data' : `${year}`} <span className='text-cyan-500 font-extrabold text-lg'>|</span>{' '}</span>
          <span>{`${calcTime(time)}`} <span className='text-cyan-500 font-extrabold text-lg'>|</span>{' '}</span>
          {genres?.map((genre, index) => {
            const isEndofArray = index === genres.length - 1

            return (
              <span key={genre.id}>
                {genre.name}
                {isEndofArray ? '' : ', '}
              </span>
            )
          })}
        </div>

        <div className='text-cyan-400 text-3xl md:text-4xl xl:text-5xl font-bold text-shadow-md uppercase tracking-wide my-3'>
          {!rating ? '0/10' : `${rating.toFixed(2)}`}
          {/* {rating.toFixed(2)} */}
        </div>
        
        <div className='w-full text-sm md:max-w-[70%] text-gray-200 text-shadow-md mt-6'>
          {summary}
        </div>

        <div>
          <h3 className='text-cyan-400 mt-6 text-xl font-bold'>Director{directors.length > 1 ? 's' : ''}</h3>
          <div>
            {directors.map(director => (
              <p className='text-gray-200' key={director.credit_id}>{director.name}</p>
            ))}
          </div>

        </div>

        <div className='mt-6 flex gap-2'>
          <Pill text={`Budget | ${convertMoney(budget)}`} />
          <Pill text={`Revenue | ${convertMoney(revenue)}`} />
        </div>

      </div>
 
    </div>
  )
}
export default MovieDetails