import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { RiStarFill } from 'react-icons/ri'
import { IMAGE_BASE_URL, THUMB_SIZE } from '../../config'
import { SelectMovie } from '../../types/Movie'
import { truncateString } from '../../utils/helpers'

type TModalProps = {
  isVisible?: boolean,
  onClose: () => void,
  movie: SelectMovie
}

const Modal = ({isVisible, onClose, movie }: TModalProps) => {
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setReveal(true)
    } else {
      setReveal(false)
    }
  }, [isVisible])
  
  return createPortal(
    <div onClick={onClose} className='absolute' aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Overlay */}
      <div className={`fixed inset-0 bg-brand-900 opacity-70 z-40 fadeIn`}/>
        <div className={`fixed inset-0 overflow-y-auto fadeIn z-50`}>
          <div className='flex h-screen max-w-sm mx-auto justify-center text-center items-center px-2'>
          {/* <div className='flex h-screen max-w-sm mx-auto px-4 justify-center text-center items-center'> */}

            <div className="relative rounded-lg bg-brand-900">
            {/* <div className="relative rounded-lg bg-brand-900"> */}

              <Image
                placeholder='blur'
                blurDataURL='/images/placeholder.png'
                width={342}
                height={192}
                layout='responsive'
                src={movie.backdropPath
                  ? IMAGE_BASE_URL + THUMB_SIZE + movie.backdropPath : '/images/kylo-sm.png'}
                alt='movie'
                priority={true}
                className='rounded-t-lg cursor-pointer w-full pb-6'
              />
              {/* <picture>
                <source
                  srcSet={movie.backdropPath
                    ? IMAGE_BASE_URL + THUMB_SIZE + movie.backdropPath : '/images/kylo-sm.png'}
                  type="image/webp"
                  />
                <img
                  src={movie.backdropPath
                    ? IMAGE_BASE_URL + THUMB_SIZE + movie.backdropPath : '/images/kylo-sm.png'}
                  alt='movie'
                  className='rounded-t-lg cursor-pointer w-full pb-6'
                />
              </picture> */}

              <div className='p-4 justify-start text-left'>
                <div className='relative text-cyan-300 text-lg'>{movie.title}</div>
                <p className='text-gray-400 mt-1 text-xs'>
                  Released | {!movie.releaseDate ? 'Release Data Unknown' : `${movie.releaseDate}`}
                  {/* Released | {movie.releaseDate} */}
                </p>
                
                <div className='my-2 flex items-center gap-3'>
                  <div className='text-sm flex items-center gap-1 border font-bold rounded bg-cyan-500 text-black border-cyan-400 py-1 px-2'><RiStarFill />
                  {!movie.rating ? '0' : `${movie.rating.toFixed(1)}`}
                  </div>
                  <Link href={`/movies/${movie.id}`}>
                    <button className='text-sm border rounded text-cyan-400 border-cyan-300 py-1 px-2 hover:text-cyan-300 hover:neon-shadow duration-200'>Details</button>
                  </Link>
                </div>
                <p className=' text-gray-300 text-sm italic pb-6'>
                  {truncateString(movie.synopsis, 90)}
                </p>
              </div>

            </div> 
          </div>
        </div>
      
    </div>, document.body
 
  )
}
export default Modal
