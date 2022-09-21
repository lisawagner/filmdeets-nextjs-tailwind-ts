import Link from 'next/link'
import { ReactNode, useRef } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { Wrapper, Items, RoundedButton } from './styles'

enum Directions {
  Left = 'left',
  Right = 'right',
}

type SliderProps = {
  children: ReactNode,
  title: string
}

const HorizontalSlider = ({ children, title }: SliderProps) => {
  const itemsRef = useRef<HTMLDivElement>(null)

  function scrollTo(direction: string) {
    const containerWidth = itemsRef.current!.offsetWidth

    switch (direction) {
      case Directions.Right:
        itemsRef.current!.scrollLeft += containerWidth / 1.5
        break
      case Directions.Left:
        itemsRef.current!.scrollLeft -= containerWidth / 1.5
        break
      default:
        break
    }
  }

  function scrollLeft() {
    scrollTo(Directions.Left)
  }

  function scrollRight() {
    scrollTo(Directions.Right)
  }

  return (
    <Wrapper>
      <header>
        <h2 className='text-white'>{title}</h2> 
      </header>
      <div>
        <RoundedButton onClick={scrollLeft} align="left">
          <RiArrowLeftSLine size="1.65rem" />
        </RoundedButton>
        <RoundedButton onClick={scrollRight} align="right">
          <RiArrowRightSLine size="1.65rem"/>
        </RoundedButton>
        {/* <button onClick={scrollLeft} className='absolute flex items-center justify-center w-16 h-16 inset-y-1/2 border z-50 rounded text-cyan-400 border-cyan-300 py-2 px-5 hover:text-cyan-300 hover:neon-shadow duration-200'>L</button>
        <button onClick={scrollRight} className='absolute flex items-center justify-center w-16 h-16 inset-y-1/2 right-0 z-50 border rounded text-cyan-400 border-cyan-300 py-2 px-5 hover:text-cyan-300 hover:neon-shadow duration-200'>R</button> */}
        <Items ref={itemsRef}>{children}</Items>
      </div>
      

    </Wrapper>
  )
}
export default HorizontalSlider