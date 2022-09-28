import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { RiStarFill } from 'react-icons/ri'
import { IMAGE_BASE_URL, THUMB_SIZE } from '../../config'
import { PopularMovie } from '../../types/Movie'
import { truncateString } from '../../utils/helpers'

type TModalProps = {
  children?: React.ReactNode,
  isVisible?: boolean,
  onClose: () => void,
  movie: PopularMovie
}

const Modal = ({isVisible, onClose, movie, children }: TModalProps) => {
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setReveal(true)
    } else {
      setReveal(false)
    }
  }, [])
  
  return createPortal(
    <div onClick={onClose} className='absolute z-40' aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-900 opacity-70 fadeIn`}/>
        <div className={`fixed inset-0 z-40 overflow-y-auto fadeIn`}>
          <div className='flex h-screen max-w-sm mx-auto px-4 justify-center text-center items-center'>

            <div className="relative rounded-lg bg-brand-900">
              <div className='absolute modal-overlay'></div>

              {/* <Image
                placeholder='blur'
                blurDataURL='/images/placeholder.png'
                width={342}
                height={192}
                src={movie.backdropPath
                  ? IMAGE_BASE_URL + THUMB_SIZE + movie.backdropPath : '/images/baby-yoda-md.png'}
                alt='movie'
                priority={true}
                className='rounded-t-lg cursor-pointer w-full pb-6'
              /> */}

              <div className=''>
                <img
                  src={movie.backdropPath
                    ? IMAGE_BASE_URL + THUMB_SIZE + movie.backdropPath : '/images/baby-yoda-32.png'}
                  alt='movie'
                  className='rounded-t-lg cursor-pointer w-full pb-6'
                />
              </div>

              <div className='p-4 justify-start text-left'>
                <div className='relative text-cyan-300 text-lg'>{movie.title}</div>
                <p className='text-gray-400 mt-1 text-xs'>Released | {movie.releaseDate}</p>
                
                <div className='my-2 flex items-center gap-3'>
                  <div className='text-sm flex items-center gap-1 border font-bold rounded bg-cyan-500 text-black border-cyan-400 py-1 px-2'><RiStarFill />{movie.rating.toFixed(1)}</div>
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

        // overlay
        // <div className={`fixed inset-0 z-10 p-8 text-white bg-gray-600/90 $`}>
        //   {/* modal container */}
        //   <div className="relative w-full max-w-sm mx-auto mt-8">
        //     <button
        //       className="absolute -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl"
        //       onClick={() => onClose()}
        //     >
        //       <span className="text-2xl leading-7 select-none">&times;</span>
        //     </button>
        //     {/* modal content */}
        //     <div className="overflow-hidden bg-gray-800 rounded shadow-xl">
        //       {children}
        //     </div>
        //   </div>
        // </div>