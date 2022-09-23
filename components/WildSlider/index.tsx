import { useState, useEffect, useRef } from 'react';
import SliderCard from './SliderCard';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { StyledSliderWrapper, StyledSlider } from './WildSliderStyles';

type SliderProps = {
  children?: any;
  zoomFactor: number;
  slideMargin: number;
  maxVisibleSlides: number;
  pageTransition: number;
  
};

const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if (windowWidth > 1200) return maxVisibleSlides;
  if (windowWidth > 992) return 4;
  if (windowWidth > 768) return 3;
  if (windowWidth > 375) return 2;
  return 1;
};

const WildSlider = ({
  children,
  zoomFactor,
  slideMargin,
  maxVisibleSlides,
  pageTransition  
}: SliderProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [transformValue, setTransformValue] = useState(`-${zoomFactor / 2}%`);
  const [scrollSize, setScrollSize] = useState(0);
  
  const sliderRef = useRef<HTMLDivElement>(null!);
  // const sliderRef = useRef<HTMLElement>(null!);

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize);
  const totalPages: number = Math.ceil(children.length / visibleSlides) - 1;

  useEffect(() => {
    //@ts-ignore
    const resizeObserver = new ResizeObserver(entries => {
      setScrollSize(entries[0].contentRect.width);
    });
    resizeObserver.observe(sliderRef.current);
  }, [sliderRef]);

  // Position slider on resize
  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);
      sliderRef.current.style.transform = `translate3D(-${
        currentPage * scrollSize
      }px, 0, 0)`;
    }
  }, [sliderRef, currentPage, scrollSize, totalPages]);

    // Have to disable hover effect on slides when flipping page
  // Otherwise it will look ugly when mouse hovers over the slides
  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointerEvents = 'none';
    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointerEvents = 'all';
    }, pageTransition);
  };

  const handleSlideMove = (forward: boolean) => {
    disableHoverEffect();
    setCurrentPage(currentPage + (forward ? 1 : -1));

    if (sliderRef.current)
      sliderRef.current.style.transform = `translate3D(-${
        (currentPage + (forward ? 1 : -1)) * scrollSize
      }px, 0, 0)`;
  };

  const handleMouseOver = (id: number) => {
    if (id % visibleSlides === 1) setTransformValue('0%'); // left
    if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`); // right
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  // const assignSlideClass = (index: number, visibleSlides: number) => {
  //   const classes = ['right', 'left'];
  //   return classes[index % visibleSlides] || '';
  // };

  return (
    <StyledSliderWrapper
      zoomFactor={zoomFactor}
      visibleSlides={visibleSlides}
    >
    
    <StyledSlider
      visibleSlides={visibleSlides}
      transformValue={transformValue}
      zoomFactor={zoomFactor}
      slideMargin={slideMargin}
      pageTransition={pageTransition}
      ref={sliderRef}
    >
      {children.map((child: any, i: any) => (
        <SliderCard
        key={i}
        slideMargin={slideMargin}
        visibleSlides={visibleSlides}
        zoomFactor={zoomFactor}
        // slideClass={assignSlideClass(i + 1, visibleSlides)}
        id={i + 1}
        callback={handleMouseOver}
        callbackOut={handleMouseOut}
        >
          {child}
        </SliderCard>
        
      ))}
    </StyledSlider>

{/* MOVE BUTTONS TO THEIR OWN COMPONENT */}
    {currentPage > 0 && (
      <div className='absolute w-14 h-full top-0 left-0 rounded-md slider-btn-padding'>
        <button className='w-full h-full text-white text-5xl font-bold cursor-pointer outline-none select-none transition-all duration-75 ease-in bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 rounded-md right-0 top-0' onClick={() => handleSlideMove(false)}>
          <RiArrowLeftSLine />
        </button>
      </div>
    )}

    {currentPage !== totalPages && (
      <div className='absolute w-14 h-full top-0 right-0 rounded-md slider-btn-padding'>
        <button className='w-full h-full text-white text-5xl font-bold cursor-pointer outline-none select-none transition-all duration-75 ease-in bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 rounded-md left-0 top-0' onClick={() => handleSlideMove(true)}>
          <RiArrowRightSLine />
        </button>
      </div>
    )}
  </StyledSliderWrapper>
  )
}
export default WildSlider