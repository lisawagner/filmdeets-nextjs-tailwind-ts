import Image from 'next/image';
import Link from 'next/link'

type Props = {
  itemId: number
  imgUrl: string;
  title: string;
  subtitle?: string;
  routeUrl: string
};

const GridCard = ({ imgUrl, title, subtitle, itemId, routeUrl }: Props) => {
  
  return (
    <div
      onClick={() => console.log(itemId)}
      className='rounded p-2 bg-black border border-cyan-900 cursor-pointer'
    >
      <Link href={`/movies${routeUrl}/${itemId}`} passHref>
        <a>
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
        </a>
      </Link>
      
      <h1 className='text-cyan-400 font-bold text-center text-md truncate text-shadow-md'>{title}</h1>
      {subtitle ? <p className='text-cyan-400 font-semibold text-center text-xs truncate text-shadow-md'>{subtitle}</p> : null}
    </div>
  )
}
export default GridCard