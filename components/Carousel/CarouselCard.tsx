import Image from 'next/image';
import { truncateString } from '../../utils/helpers';
import { IMAGE_BASE_URL, THUMB_SIZE } from '../../config'
import { SelectMovie } from '../../types/Movie'

type TCardProps = {
  movie: SelectMovie,
  onClick: () => void,
}

const CarouselCard = ({movie, onClick}: TCardProps) => {

  return (
    <div
      key={movie.id}
      className="flex flex-col items-center justify-center animate-fadeIn"
      onClick={onClick}
    >
      <Image
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        width={342}
        height={513}
        src={movie.posterPath
          ? IMAGE_BASE_URL + THUMB_SIZE + movie.posterPath
          : '/images/baby-yoda-32.png' }
        alt='movie'
        priority={true}
        className='rounded-md bg-brand-900 cursor-pointer'
      />
      <div className='text-cyan-300 text-xs py-2 uppercase'>
        {truncateString(movie.title, 24)}
      </div>
    </div>
  )
}
export default CarouselCard