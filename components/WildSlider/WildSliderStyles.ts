import styled from 'styled-components';
import { StyledSliderItem } from './SliderCardStyles';

type SliderWrapperProps = {
  zoomFactor: number;
  visibleSlides: number;
};

type SliderProps = {
  visibleSlides: number;
  transformValue: string;
  zoomFactor: number;
  slideMargin: number;
  pageTransition: number;
  ref: any;
};

export const StyledSliderWrapper = styled.div<SliderWrapperProps>`
  overflow: hidden;
  position: relative;
  background: #111;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.7 + '%'} 0;
  background: red;
  padding: 2rem 0;
`;

export const StyledSlider = styled.div<SliderProps>`
  display: flex;
  padding: 0 0.5rem;
  /* column-gap: 1rem; */
  transition: transform ${(props) => props.pageTransition}ms ease;
`;