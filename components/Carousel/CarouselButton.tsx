import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

type TProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  className: string,
  isPrev: boolean
}

// 'glass-container'

const CarouselButton = ({ onClick, isPrev }: TProps) => {
  
  return (

    <button
      className={`absolute z-10 top-1/2 -translate-y-1/2 w-10 h-24 border-spacing-1 text-cyan-500 hover:text-cyan-300 border border-y-cyan-400 bg-brand-900 hover:neon-shadow-soft duration-200 ${isPrev ? 'left-0 rounded-r-lg border-r-cyan-500 border-l-0' : 'right-0 rounded-l-lg border-l-cyan-500 border-r-0'}`}
      onClick={onClick}
    >
      <div className='flex items-center justify-center text-7xl'>
        {isPrev ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
      </div>
    </button>
  )
}
export default CarouselButton