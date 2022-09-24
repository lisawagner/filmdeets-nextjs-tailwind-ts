import { createPortal } from 'react-dom'
import Link from 'next/link'
import { PopularMovie } from '../../types/Movie'

type TModalProps = {
  children?: React.ReactNode,
  isVisible?: boolean,
  onClose: () => void,
  movie: PopularMovie
}

const Modal = ({isVisible, onClose, movie, children }: TModalProps) => {
  return createPortal(
    <div className='relative z-40' aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Overlay */}
      <div className='fixed inset-0 z-40 bg-brand-900 bg-opacity-70 transition-opacity'></div>

      {/* Inset Content Wrapper */}
      <div className='fixed inset-0 z-40 overflow-y-auto'>
        <div className='flex h-screen justify-center text-center items-center' onClick={onClose}>
          {/* Modal Panel Content */}
          <div className="rounded-lg glass-container w-full mx-2 sm:w-1/2">
            <div className='relative w-full p-2 rounded bg-white'>

              <header className='relative border-b-2 border-cyan-400'>
                <h2 className='text-center'>{movie.title}</h2>
                <button className='absolute top-0 right-0 bg-transparent'>X</button>
              </header>
              <main className='border-b-1 py-2 px-0'>{children}</main>
              <footer>
              <Link href={`/movies/${movie.id}`}>
                <button className='p-2 rounded bg-cyan-400 hover:bg-cyan-200'>Details</button>
                </Link>
              </footer>

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