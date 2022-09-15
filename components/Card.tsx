// components
import Thumbnail from './Thumbnail'

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

// TODO:  Decide on card styles - overlay? slide in details?
//        move title below image?
const Card = ({ imgUrl, title, subtitle }: Props) => (
  <div className='relative h-80 p-2 rounded-md z-40 bg-gray-800 shadow-dark-1'>
    <div className='relative h-full shadow-dark-1'>
      <Thumbnail imgUrl={imgUrl} />

      <div className='absolute w-full bottom-0 px-4 py-2 rounded-b-sm bg-zinc-800 opacity-80'>
        <h2 className='text-cyan-200 text-center text-sm truncate opacity-100'>{title}</h2>
        {subtitle ? <p className='text-cyan-400 text-center text-xs truncate'>{subtitle}</p> : null}
      </div>

    </div>
  </div>
);

export default Card;