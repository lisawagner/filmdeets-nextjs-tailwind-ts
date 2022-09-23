
import { StyledSliderItem } from './SliderCardStyles'

type CardProps = {
  // slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  visibleSlides: number;
  children?: React.ReactNode
}

const SliderCard = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  // slideClass,
  id,
  callback,
  callbackOut,
  children  
}: CardProps) => {

  return (
    <StyledSliderItem
      zoomFactor={zoomFactor}
      slideMargin={slideMargin}
      visibleSlides={visibleSlides}
      // className={slideClass}
      onMouseOver={() => callback(id)}
      onMouseOut={callbackOut}
    >
      {children}
    </StyledSliderItem>
  )
}
export default SliderCard