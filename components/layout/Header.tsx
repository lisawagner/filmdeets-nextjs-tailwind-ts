import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollYPosition } from '../../utils/useScrollPosition';
// Components
import SearchInput from './SearchInput'

// type Props = {
//   setQuery?: React.Dispatch<React.SetStateAction<string>>;
// };

// const Header = ({ setQuery }: Props) => {
const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const scroll = () => {
    if (window.scrollY > 200) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  // console.log(hasScrolled);
  
  // blue + white "good tron colors"
  // red/orange/yellow "bad tron/sith" colors

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', scroll)
    }
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <div className={`flex flex-col md:flex-row gap-1 items-center justify-between p-4 z-[100] w-full fixed duration-1000 top-0 ${hasScrolled ? 'bg-brand-900' : 'bg-transparent gradient-transparency'}`}>

      <Link href='/'>
        <h1 className='text-red-600 text-2xl md:text-3xl cursor-pointer'>filmClu 2.0</h1>
      </Link>
      <div className={`invisible md:visible ${hasScrolled ? 'opacity-0' : '' } duration-1000`}>
        <Image width='100' height='20' src='/images/tmdb.svg' alt='tmdb logo' />
      </div>

      <div>
        <div>
          <SearchInput />
        </div>

      </div>
    </div>

  )
};

export default Header;