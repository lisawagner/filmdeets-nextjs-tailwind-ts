import Link from "next/link";
import CarouselButton from './CarouselButton'
import { useCarousel } from "../../utils";
import { CarouselProps } from "../../types/Carousel";


const Carousel = ({children, maxVisibleSlides, infiniteLoop, title, href, hasLink }: CarouselProps) => {
  const {
    currentIndex,
    visibleSlides,
    transitionEnabled,
    isRepeating,
    isPrev,
    length,
    handleNext,
    handlePrev,
    handleTouchStart,
    handleTouchMove,
    handleTransitionEnd,
    outputPrevItem,
    outputNextItem
  } = useCarousel({children, maxVisibleSlides, infiniteLoop, title, href, hasLink})

  return (
    <div className="relative w-full flex flex-col">
      <div className="bg-brand-900 w-full h-full py-4 px-4 md:px-8 flex items-center justify-between">
        <h2 className=" text-2xl text-cyan-300">
          {title}
        </h2>
        {hasLink
          ? <Link href={href} passHref><a className="text-red-600">See more</a></Link>
          : ''
        }
        
      </div>
      <div className="w-full flex">
        {(isRepeating || currentIndex > 0) &&
          <CarouselButton onClick={handlePrev} className="left-arrow" isPrev={isPrev}/>
        }
          <div
            className="w-full h-full overflow-hidden  bg-brand-900 pb-11 py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${visibleSlides}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                transition: !transitionEnabled ? 'none' : undefined,
              }}
              onTransitionEnd={() => handleTransitionEnd()}
            >
              { (length > visibleSlides && isRepeating) && outputPrevItem() }
                {children}
              { (length > visibleSlides && isRepeating) && outputNextItem() }
            </div>

          </div>
            {(isRepeating || currentIndex < (length - visibleSlides)) &&
              <CarouselButton onClick={handleNext} className="left-arrow" isPrev={!isPrev}/>
            }
      </div>
    </div>
  )
}
export default Carousel