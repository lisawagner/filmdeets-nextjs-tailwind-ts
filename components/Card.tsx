import { useState } from 'react'
// components
import Thumbnail from './Thumbnail'

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

// consider conditional to only show titles on Cast, not on the movie itself.
// or separate out the logic more - separate cast and movies

// TODO:  Decide on card styles - overlay? slide in details?
//        move title below image?
const Card = ({ imgUrl, title, subtitle }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  
  return (
  // <div className='relative h-80 p-2 rounded-md z-40 bg-gray-800 shadow-dark-1'>
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className='relative h-80 p-2 z-40 rounded border border-cyan-400 hover:neon-shadow hover:opacity-80 duration-300 hover:scale-105'
  >
    <div className='relative h-full'>
      <Thumbnail imgUrl={imgUrl} /> 
      <div className={`absolute w-full bottom-0 px-4 py-2  rounded-b-sm duration-300 ${isHovering ? 'opacity-80 bg-slate-900' : 'opacity-0'}`}>
        <h2 className='text-cyan-400 font-bold text-center text-md truncate text-shadow-md'>{title}</h2>
        {subtitle ? <p className='text-cyan-400 font-semibold text-center text-xs truncate text-shadow-md'>{subtitle}</p> : null}
      </div>

    </div>
  </div>
)};

export default Card;