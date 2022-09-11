import Image from 'next/image';

type Props = {
  imgUrl: string;
  title: string
  text: string
};

const Hero = ({ imgUrl, title, text }: Props) => (
  <div className='static w-full h-128'>

    <div className='relative flex flex-col-reverse h-full max-w-7xl m-auto pb-12 text-center md:text-left z-50'>

      <div className='text-white max-w-2xl px-4 py-4 rounded-md text-shadow-md z-40'>
        <h2 className='text-2xl md:text-4xl font-bold pb-6'>{title}</h2>
        <p className='text-lg md:text-md'>{text}</p>
      </div>
      
    </div>
    <div className='position absolute gradient-overlay top-0 left-0 right-0 bottom-0 z-10'></div>
    <Image priority={true} objectFit='cover' objectPosition='center' layout='fill' src={imgUrl} alt='hero-image' className='z-0' />


  </div>
);

export default Hero;