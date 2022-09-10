import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollYPosition } from '../utils/useScrollPosition';
// Components
import Search from './Search'

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  // const scrollY = useScrollYPosition()

  // console.log(scrollY);
  
  // change header background onscroll
  // const [color, setColor] = useState(false)
  // const changeColor = () => {
  //   if (window.scrollY >= 90) {
  //     setColor(true)
  //   } else {
  //     setColor(false)
  //   }
  // }
  // console.log(color);

  function scroll() {
    if (window.scrollY > 200) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    // <div className={`sticky flex top-0 z-40 w-full h-24 bg-zinc-900`}>
    // <div className={`sticky flex top-0 z-40 w-full h-24 ${scrollY > 0 ? 'bg-zinc-900' : 'bg-white'}`}>
    <div className={`sticky flex top-0 z-40 w-full h-24 ${hasScrolled ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
        <Link href='/'>
          <div className='flex items-center cursor-pointer'>
            <div className='invisible md:visible'>
              <Image width='150' height='50' src='/images/rmdb-logo.svg' alt='rmdb-logo' />
            </div>
            <div className='absolute md:invisible pt-2'>
              <Image height='42' width='42' src='/images/rmdb-logo-small.svg' alt='rmdb-logo-small' />
            </div>
          </div>
        </Link>
        {/* <h1 className='text-purple-400'>Scroll: {scrollY}</h1> */}
        {/* if no query, don't show the search bar */}
        {setQuery ? (
          <div className="relative flex items-center">
            <Search setQuery={setQuery} />
          </div>
        ) : null}

      </div>
    </div>
  )
};

export default Header;