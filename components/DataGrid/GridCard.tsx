import Image from 'next/image';

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

const GridCard = ({ imgUrl, title, subtitle }: Props) => {
  return (
    <div
      className='rounded p-2 bg-black border border-cyan-900 cursor-pointer'
    >
      {/* <div className='absolute modal-overlay'></div> */}

        <Image
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          width={375}
          height={563}
          className='rounded opacity-70'
          // layout='fill'
          // objectFit='cover'
          src={imgUrl}
          alt='thumbnail'
          priority={true}
        />

      {/* <Image
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        width={375}
        height={563}
        className='rounded'
        // layout='fill'
        // objectFit='cover'
        src={imgUrl}
        alt='thumbnail'
        priority={true}
      /> */}
      {/* <div className='absolute z-50 rounded w-[375px] h-[563px] bg-gradient-radial from-transparent via-transparent to-brand-900'></div> */}
      <h1 className='text-cyan-400 font-bold text-center text-md truncate text-shadow-md'>{title}</h1>
      {subtitle ? <p className='text-cyan-400 font-semibold text-center text-xs truncate text-shadow-md'>{subtitle}</p> : null}
    </div>
  )
}
export default GridCard