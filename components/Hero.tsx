import Image from 'next/image';

type Props = {
  imgUrl: string;
  title: string
  text: string
};

const Hero = ({ imgUrl, title, text }: Props) => (
  <div className='relative w-full h-128'>
    <div className='relative flex flex-col-reverse h-full max-w-7xl m-auto z-10 pb-12 text-center md:text-left'>
      <div className='text-white max-w-2xl px-4 py-4 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 text-shadow-md'>
        <h2 className='text-2xl md:text-4xl font-bold pb-6'>{title}</h2>
        <p className='text-lg md:text-md'>{text}</p>
      </div>
    </div>
    <Image priority={true} objectFit='cover' objectPosition='center' layout='fill' src={imgUrl} alt='hero-image' />
  </div>
);

export default Hero;