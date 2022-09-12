import Image from 'next/image';
// Helpers
import { truncateString } from '../utils/helpers';

type Props = {
  imgUrl: string;
  title: string
  text: string
};

// TODO: Fix poster height/width and position

const Hero = ({ imgUrl, title, text }: Props) => {
  
  return (

  // <div className='static'>
  <div className='w-full h-[800px] text-white'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[800px] bg-gradient-to-r from-black'></div>
      {/* <Image
        priority={true}
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={imgUrl}
        alt={title}
        className='w-full h-full object-cover'
      /> */}
      <img
          className='w-full h-full object-cover object-center'
          src={imgUrl}
          alt={title}
        />
      <div className='absolute w-full top-[53%] p-4 md:p-8'>

        <h1 className='text-3xl md:text-4xl md:max-w-[50%] lg:text-5xl font-bold'>{title}</h1>

        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
            Play
          </button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
            Watch Later
          </button>
        </div>
        <p className='text-gray-400 text-sm'>
          Released: addReleaseDate
        </p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {truncateString(text, 150)}
        </p>
      </div>
    </div>

    {/* <div className='relative flex flex-col-reverse h-full max-w-7xl m-auto pb-12 text-center md:text-left z-50'>
      <div className='text-white max-w-2xl px-4 py-4 rounded-md text-shadow-md z-40'>
        <h2 className='text-2xl md:text-4xl font-bold pb-6'>{title}</h2>
        <p className='text-lg md:text-md'>{text}</p>
      </div>
    </div> */}

    {/* <div className='position absolute gradient-overlay top-0 left-0 right-0 bottom-0 z-10'></div> */}

    {/* <Image
      priority={true}
      objectFit='cover'
      objectPosition='center'
      layout='fill'
      src={imgUrl}
      alt='hero-image'
      className='z-0'
    /> */}

    {/* <div className='relative flex flex-col-reverse h-full max-w-7xl m-auto pb-12 text-center md:text-left z-50'>
      <div className='text-white max-w-2xl px-4 py-4 rounded-md text-shadow-md z-40'>
        <h2 className='text-2xl md:text-4xl font-bold pb-6'>{title}</h2>
        <p className='text-lg md:text-md'>{text}</p>
      </div>
    </div>

    <div className='position absolute gradient-overlay top-0 left-0 right-0 bottom-0 z-10'></div>

    <Image
      priority={true}
      objectFit='cover'
      objectPosition='center'
      layout='fill'
      src={imgUrl}
      alt='hero-image'
      className='z-0'
    /> */}

  </div>
);}


export default Hero;
