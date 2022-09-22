import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from "react";
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
} from 'embla-carousel'
// import { mediaByIndex } from "../../public/images"; 
import { PrevButton, NextButton } from './SliderButtons'

type SliderProps = {
  slides: number[]
}

const BigSlider = ({ slides }: SliderProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    // align: "start",
    // loop: true,
    // skipSnaps: false,
    // inViewThreshold: 0.7,
    slidesToScroll: 2,
    skipSnaps: false,
    loop: true,
    align: "center"
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    // <div className="embla">
    <div className="relative bg-white max-w-2xl p-2 mx-auto">
      {/* <div className="embla__viewport" ref={viewportRef}> */}
      <div className=" overflow-hidden w-full" ref={viewportRef}>
        {/* <div className="embla__container"> */}
        <div className="flex select-none touch-none -ml-3">
          {slides.map((index) => (
            <div className="relative ml-3 min-w-fit flex items-center justify-center" key={index}>
            {/* <div className="embla__slide" key={index}> */}
              <div className="relative h-50 flex items-center justify-center overflow-hidden bg-pink-400">
              {/* <div className="embla__slide__inner"> */}
                <img
                  // className="embla__slide__img"
                  className="rounded-lg"
                  // src={mediaByIndex(index)}
                  src={`/images/media-${index + 1}.png`}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
         

      
    </div>
  )
}
export default BigSlider