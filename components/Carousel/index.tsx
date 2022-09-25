import { useEffect, useState } from "react"
import CarouselButton from './CarouselButton'

type CarouselProps = {
  children?: any;
  maxVisibleSlides: number,
  infiniteLoop: boolean,
  title: string,
}
// type predicates
function isTouchEvent(e: React.TouchEvent | React.MouseEvent):e is React.TouchEvent
  { return e && 'touches' in e; }

function isMouseEvent(e: React.TouchEvent | React.MouseEvent): e is React.MouseEvent
  { return e && 'screenX' in e; }

const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if (windowWidth > 1500) return maxVisibleSlides;
  if (windowWidth > 1366) return 6;
  if (windowWidth > 1100) return 5;
  if (windowWidth > 767) return 4;
  if (windowWidth > 568) return 3;
  if (windowWidth > 438) return 2;
  return 1;
};


// TODO: Hide left button, or fix infiniteLoop scroll 
const Carousel = ({children, maxVisibleSlides, infiniteLoop, title}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? maxVisibleSlides : 0)
  const [length, setLength] = useState(children.length)
  
  const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > maxVisibleSlides)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  const [width, setWidth] = useState(0);
  const visibleSlides = numberOfSlides(maxVisibleSlides, width);
  const [isPrev] = useState(true)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
    setIsRepeating(infiniteLoop && children.length > maxVisibleSlides)
  }, [children, infiniteLoop, maxVisibleSlides])

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])
  

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === visibleSlides || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, visibleSlides, length])

  const next = () => {
    if (visibleSlides > 3) {
      if (isRepeating || currentIndex < (length - visibleSlides)) {
        setCurrentIndex(prevState => prevState + 3)
      }
    } else {
      if (isRepeating || currentIndex < (length - visibleSlides)) {
        setCurrentIndex(prevState => prevState + 1)
      }
    }
  }

  const prev = () => {
    if (visibleSlides > 3) {
      if (isRepeating || currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 3)
      }
    } else {
      if (isRepeating || currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
      }
    }
  }

  // Save touch start position to state touchPosition
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if(isTouchEvent(e)) {
      // console.log(e.touches[0].clientX);
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
    }
    // if(isMouseEvent(e)) {
    //   console.log(e.screenX);     
    // }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition

    // if this is the initial touch position, don't do anything yet
    if(touchDown === null) {
        return
    }

    // set the current touch position, then find the difference
    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    // if user is swiping, goto next/prev depending on the difference
    if (diff > 5) next()
    if (diff < -5) prev()

    // reset touch position
    setTouchPosition(null)
  }

  const handleTransitionEnd = () => {
    if (isRepeating) {
        if (currentIndex === 0) {
            setTransitionEnabled(false)
            setCurrentIndex(length)
        } else if (currentIndex === length + visibleSlides) {
            setTransitionEnabled(false)
            setCurrentIndex(visibleSlides)
        }
    }
  }

  // reset index each direction
  const renderExtraPrev = () => {
    let output = []
    for (let i = 0; i< visibleSlides; i++) {
        output.push(children[length - 1 - i])
    }
    output.reverse()
    return output
  }

  const renderExtraNext = () => {
    let output = []
    for (let i = 0; i < visibleSlides; i++) {
        output.push(children[i])
    }
    return output
  }

  return (
    <div
      className="w-full flex flex-col"
    >
      <h2 className=" text-xl text-cyan-300 font-bold bg-brand-900 w-full h-full py-8 px-4 md:px-8 flex items-center z-10">
        {title}
      </h2>
      <div className="w-full flex relative">
      {/* You can alwas change the content of the button to other things */}
        {(isRepeating || currentIndex > 0) &&
          <CarouselButton onClick={prev} className="left-arrow" isPrev={isPrev}/>
        }
          <div
            className="w-full h-full overflow-hidden bg-brand-900 py-4"
            // className="w-full h-full overflow-hidden bg-brand-900 py-4"
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
              { (length > visibleSlides && isRepeating) && renderExtraPrev() }
                {children}
              { (length > visibleSlides && isRepeating) && renderExtraNext() }
            </div>

          </div>
            {/* You can alwas change the content of the button to other things */}
            {(isRepeating || currentIndex < (length - visibleSlides)) &&
              <CarouselButton onClick={next} className="left-arrow" isPrev={!isPrev}/>
            }
      </div>
    </div>
  )
}
export default Carousel