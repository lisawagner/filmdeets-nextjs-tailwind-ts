import Image from 'next/image';
// Helpers
import { truncateString } from '../utils/helpers';
// Custom styles
import styles from '../styles/Hero.module.css'

type Props = {
  imgUrl: string;
  title: string
  text: string
};

// TODO: Fix poster height/width and position

const Hero = ({ imgUrl, title, text }: Props) => {
  
  return (
    <div className='relative w-full min-h-screen text-white'>
      <div className={`w-full h-screen ${styles.stars}`}></div>
      <div className={`w-full h-screen ${styles.stars2}`}></div>
      <div className={`w-full h-screen ${styles.stars3}`}></div>

      <div className='w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent'></div>
        <div className='absolute overflow-hidden inset-0 m-0 p-0 w-full h-full bg-gradient-to-r from-[#010404] via-transparent to-transparent'></div>
        <Image
          priority={true}
          objectFit='cover'
          objectPosition='center'
          layout='fill'
          src={imgUrl}
          alt={title}
          className='w-full h-full object-cover -z-10'
        />

        <div className='absolute w-full top-[53%] p-4 md:p-8'>

          <h1 className='text-3xl md:text-4xl md:max-w-[50%] lg:text-5xl font-bold text-shadow-md'>{title}</h1>

          <div className='my-4'>
            <button className='border bg-cyan-400 text-black border-cyan-300 py-2 px-5'>
              Favorite
            </button>
            <button className='border text-cyan-400 border-cyan-300 py-2 px-5 ml-4'>
              Details
            </button>
          </div>
          <p className='text-gray-400 text-sm'>Released: addReleaseDate</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-shadow-lg'>
            {truncateString(text, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
