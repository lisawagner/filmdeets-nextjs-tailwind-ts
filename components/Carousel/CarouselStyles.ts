import styled from 'styled-components';

type Props = {
  visibleSlides: number;
}

export const SliderCard = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms linear;
  -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
  scrollbar-width: none;  /* hide scrollbar in Firefox */
  flex: 0 0 calc(100% / ${(props) => props.visibleSlides});

  /* hide scrollbar in webkit browser */
  :-webkit-scrollbar, .carousel-content::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`