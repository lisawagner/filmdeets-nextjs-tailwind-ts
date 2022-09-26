import Image from 'next/image';
import Link from 'next/link';
// Helpers
import { truncateString } from '../utils/helpers';
// Custom styles
import styles from '../styles/Hero.module.css'
import { RiStarFill } from 'react-icons/ri'

type Props = {
  imgUrl: string;
  title: string
  text: string,
  tagline: string,
  releaseDate: string,
  id: number,
  rating: number
};

const Hero = ({ imgUrl, title, text, tagline, releaseDate, id, rating }: Props) => {
  
  return (
    <div className='relative w-full min-h-screen text-white'>
      <div className={`w-full h-screen ${styles.stars}`}></div>
      <div className={`w-full h-screen ${styles.stars2}`}></div>
      <div className={`w-full h-screen ${styles.stars3}`}></div>

      <div className='w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent'></div>
        <div className='absolute overflow-hidden inset-0 m-0 p-0 w-full h-full bg-gradient-to-r from-[#010404] via-transparent to-transparent'></div>
        <div className='absolute w-full h-full'>
          <Image
            priority={true}
            objectFit='cover'
            objectPosition='center'
            layout='fill'
            src={imgUrl}
            alt={title}
            className='w-full h-full object-cover -z-10 animate-fadeIn'
            placeholder='blur'
            blurDataURL='/images/placeholder.png'
          />
        </div>
        <div className='absolute w-full top-[53%] lg:top-[50%] p-4 md:p-8'>
          <span className='md:text-2xl md:max-w-[70%] xl:text-3xl italic text-shadow-md'>"{tagline}"</span>
          <h1 className='text-cyan-400 text-2xl md:text-3xl md:max-w-[50%] lg:text-4xl font-bold text-shadow-md'>{title}</h1>
          <p className='text-gray-400 mt-2 text-sm'>Released | {releaseDate}</p>
          <div className='my-4 flex items-center gap-4'>
            <div className='flex items-center gap-2 border font-bold rounded bg-cyan-400 text-black border-cyan-300 py-2 px-5'>
              <RiStarFill />{rating.toFixed(2)}
            </div>
            <Link href={`/movies/${id}`}>
              <button
                className='border rounded text-cyan-400 border-cyan-300 py-2 px-5 hover:text-cyan-300 hover:neon-shadow duration-200'
              >
                See Details
              </button>
            </Link>
          </div>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-shadow-lg'>
            {truncateString(text, 107)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
