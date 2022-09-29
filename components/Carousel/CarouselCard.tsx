import { IMAGE_BASE_URL, THUMB_SIZE } from '../../config'
import { Movie, SelectMovie } from '../../types/Movie'
import Image from 'next/image';

type TCardProps = {
  movie: SelectMovie,
  onClick: () => void,
}

const CarouselCard = ({movie, onClick}: TCardProps) => {

  return (
    <div
      key={movie.id}
      className="flex items-center justify-center animate-fadeIn"
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
    </div>
  )
}
export default CarouselCard